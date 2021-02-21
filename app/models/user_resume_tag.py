from .db import db

User_Resume_Tag = db.Table(
    "user_resume_tags",
    db.Model.metadata,
    db.Column("user_tag", db.ForeignKey("user_tags.id", onupdate="CASCADE", ondelete="CASCADE"), primary_key=True),
    db.Column("resume_id", db.ForeignKey("resumes.id", onupdate="CASCADE", ondelete="CASCADE"), primary_key=True)
)
