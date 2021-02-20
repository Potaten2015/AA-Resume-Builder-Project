from .db import db

class Template(db.Model):
    __tablename__ = 'templates'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    html = db.Column(db.Text, nullable=False)
