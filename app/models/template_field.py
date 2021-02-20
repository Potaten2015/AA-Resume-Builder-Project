from .db import db

class Template_Field(db.Model):
    __tablename__ = 'template_fields'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    resume_html = db.Column(db.Text, nullable=False)
    form_html = db.Column(db.Text, nullable=False)
