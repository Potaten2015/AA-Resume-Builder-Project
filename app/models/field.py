from .db import db

class Field(db.Model):
    __tablename__ = 'fields'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    resume_html = db.Column(db.Text, nullable=False)
    form_html = db.Column(db.Text, nullable=False)

    template_fields = db.relationship("Template_Field", back_populates='field')
