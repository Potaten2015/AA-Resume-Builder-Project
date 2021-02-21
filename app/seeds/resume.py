from app.models import db, Resume

# Adds a demo user, you can add other users here if you want
def seed_resumes():

    db.session.add()
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_resumes():
    db.session.execute('TRUNCATE resumes;')
    db.session.commit()
