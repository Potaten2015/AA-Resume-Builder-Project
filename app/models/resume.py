from .db import db
from .user_tag_resume_join import User_Resume_Tags

class Resume(db.Model):
    __tablename__ = 'resumes'
    id = db.Column(db.Integer, primary_key=True)
    html = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates="resumes")
    user_tags = db.relationship("User_Tag", secondary=User_Resume_Tags, back_populates="resumes"
    )
