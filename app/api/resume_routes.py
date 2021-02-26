from flask import Blueprint, jsonify, session, request
from app.models import User, db, Resume, Resume_Field
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

@resume_routes.route('/save', methods=["POST"])
def save_resume():

    resumeData = request.json
    print(resumeData)

    resume = Resume(html="<h1>HTML FOR RESUME</h1>", user_id=resumeData["user_id"], style_id=resumeData["style_id"])

    db.session.add(resume)
    db.session.commit()
    db.session.flush()

    print("RESUME _________------ ", resume.id)

    for field in resumeData["fields"]:
        print(field)
        db.session.add(Resume_Field(resume_id=resume.id, field_id=field["field_id"], page_order=field["page_order"], value=field["value"]))

    db.session.commit()

    return {"MESSAGE": "SUCCESSFULLY CREATED RESUME"}
