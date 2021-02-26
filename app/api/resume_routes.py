from flask import Blueprint, jsonify, session, request
from app.models import User, db, Resume
from flask_login import current_user, login_user, logout_user, login_required

resume_routes = Blueprint('resumes', __name__)


@resume_routes.route("/", methods=["GET"])
def get_resumes():
    current_user = int(session['_user_id'])
    resumes = Resume.query.filter(Resume.user_id == current_user).all()
    each_resume = {}
    count = 0
    for resume in range(0, len(resumes)):
        each_resume[count] = {
            "id": resumes[count].id,
            "html": resumes[count].html,
            "user_id": resumes[count].user_id,
            "style_id": resumes[count].style_id,
        }
        count += 1
    return each_resume


@resume_routes.route('/<int:id>', methods=["GET"])
def get_resume(id):
    resume = Resume.query.get(id)
    single_resume = {
        "id": resume.id,
        "html": resume.html,
        "user_id": resume.user_id,
        "style_id": resume.style_id,
    }
    return single_resume
