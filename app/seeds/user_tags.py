from app.models import db, User_Tag

# Adds a demo user, you can add other users here if you want
def seed_default_tags():

    colors = ("Red", "Orange", "Yellow", "Green", "Blue", "Purple")
    types = ("Fancy", "Plain", "Ugly")

    for color in colors:
        for type in types:
            name = "-".join(type, color)
            db.session.add(Default_Tag(name=name))

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_default_tags():
    db.session.execute('TRUNCATE default_tags;')
    db.session.commit()
