from .db import db
from .user_tag_resume_join import User_Resume_Tags

class User_Tag(db.Model):
    __tablename__ = 'user_tags'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    resumes = db.relationship("Resume", secondary=User_Resume_Tags, back_populates='user_tags')
