from .db import db

User_Resume_Tags = db.Table(
    "User_Resume_Tags",
    db.Model.metadata,
    db.Column("user_id", db.ForeignKey("users.id"), primary_key=True),
    db.Column("resume_id", db.ForeignKey("resumes.id"), primary_key=True)
)
