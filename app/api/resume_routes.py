from flask import Blueprint, jsonify, session, request
from app.models import User, db, Resume
from flask_login import current_user, login_user, logout_user, login_required

resume_routes = Blueprint('resumes', __name__)

@resume_routes.route("/", methods=["GET"])
def get_resumes():
    resumes = Resume.query.all()
    resume_html_list = []
    for resume in resumes:
        resume_html_list.append(resume.html)
    print(resume_html_list)
    return "SPICY"