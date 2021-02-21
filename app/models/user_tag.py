from .db import db
from .user_resume_tag import User_Resume_Tag

class User_Tag(db.Model):
    __tablename__ = 'user_tags'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(30), nullable=False)

    user = db.relationship("User", back_populates='user_tags')
    resumes = db.relationship("Resume", secondary=User_Resume_Tag, back_populates='user_tags')
