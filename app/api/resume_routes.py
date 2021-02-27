from flask import Blueprint, jsonify, session, request
from app.models import User, db, Resume, Resume_Field, User_Resume_Tag
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload

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

@resume_routes.route('/edit/<int:id>', methods=["GET"])
def edit_resume(id):
    resume = db.session.query(Resume).join(Resume.resume_fields).options(joinedload(Resume.resume_fields).joinedload(Resume_Field.field),joinedload(Resume.user_resume_tags).joinedload(User_Resume_Tag.user_tag)).filter(Resume.id==id).first()

    resume_resume_info = {}

    field_tuples = sorted([(resume_field.page_order - 1, index) for index, resume_field in enumerate(resume.resume_fields)], key=lambda x:x[0])
    resume_resume_info = {"field_data": [], "user_tags": []}
    for user_tag in resume.user_resume_tags:
        resume_resume_info["user_tags"].append(user_tag.default_tags.name)
    for pair in field_tuples:
        resume_resume_info["field_data"].append({"name":resume.resume_fields[pair[1]].field.name, "placeholder": resume.resume_fields[pair[1]].field.placeholder, "field_id": resume.resume_fields[pair[1]].field.id, "value": resume.resume_fields[pair[1]].value})

    return resume_resume_info

@resume_routes.route('/save', methods=["POST"])
def save_resume():

    resumeData = request.json
    print(resumeData)

    resume = Resume(html="<h1>HTML FOR RESUME</h1>", user_id=resumeData["user_id"], style_id=resumeData["style_id"])

    db.session.add(resume)
    db.session.commit()
    db.session.flush()

    for field in resumeData["fields"]:
        print(field)
        db.session.add(Resume_Field(resume_id=resume.id, field_id=field["field_id"], page_order=field["page_order"], value=field["value"]))

    db.session.commit()

    return {"MESSAGE": "SUCCESSFULLY CREATED RESUME"}
