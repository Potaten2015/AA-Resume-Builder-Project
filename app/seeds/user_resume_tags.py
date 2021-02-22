from app.models import db, user_resume_tag

# Adds a demo user, you can add other users here if you want
def seed_user_resume_tags():

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_user_resume_tags():
    db.session.execute('TRUNCATE user_resume_tags CASCADE;')
    db.session.commit()
