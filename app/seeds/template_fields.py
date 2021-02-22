from app.models import db, Template_Field

# Adds a demo user, you can add other users here if you want
def seed_template_default_tags():

    db.session.add(Default_Tag(name=name))

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_template_default_tags():
    db.session.execute('TRUNCATE default_tags CASCADE;')
    db.session.commit()
