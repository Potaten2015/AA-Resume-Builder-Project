from flask import Blueprint, jsonify, session, request
from app.models import Template, db, Template_Field, Field
from flask_login import login_required
from sqlalchemy.orm import joinedload

template_routes = Blueprint('templates', __name__)

@template_routes.route("/", methods=["GET"])
@login_required
def get_templates():
    templates = db.session.query(Template).join(Template.template_fields).options(joinedload(Template.template_fields).joinedload(Template_Field.field)).order_by(Template_Field.page_order).all()

    template_resume_html = {}
    template_form_html = {}


    for template in templates:
        field_tuples = sorted([(template_field.page_order - 1, index) for index, template_field in enumerate(template.template_fields)], key=lambda x:x[0])
        for template_field in template.template_fields:
            template_resume_html[template.name] = ""
            template_form_html[template.name] = ""
        for pair in field_tuples:
            template_resume_html[template.name] = template_resume_html[template.name] + template.template_fields[pair[1]].field.resume_html
            template_form_html[template.name] = template_form_html[template.name] + template.template_fields[pair[1]].field.form_html
    return template_resume_html
