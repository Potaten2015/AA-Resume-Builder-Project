from app.models import db, Template_Field

# Adds a demo user, you can add other users here if you want
def seed_template_fields():
    # full_name (1)
    db.session.add(Template_Field(template_id=1, field_id=1, page_order=1))
    db.session.add(Template_Field(template_id=2, field_id=1, page_order=1))
    db.session.add(Template_Field(template_id=3, field_id=1, page_order=1))
    # github (2)
    db.session.add(Template_Field(template_id=1, field_id=2, page_order=2))
    db.session.add(Template_Field(template_id=2, field_id=2, page_order=2))
    db.session.add(Template_Field(template_id=3, field_id=2, page_order=2))
    # city (3)
    db.session.add(Template_Field(template_id=1, field_id=3, page_order=3))
    db.session.add(Template_Field(template_id=2, field_id=3, page_order=3))
    db.session.add(Template_Field(template_id=3, field_id=3, page_order=3))

    # phone_number (4)

    # email (5)

    # linkedin (6)

    # intro_header (7)

    # intro_mission (8)

    # intro_long (9)

    # intro_skill (10)

    # experience_company (11)

    # experience_city (12)

    # experiencce_date (13)

    # experience_description (14)

    # experience_title (15)

    # experience_responsibility (16)

    # education_facility (17)

    # education_degree (18)

    # education_graduation_date (19)

    # education_gpa (20)

    # education_minor (21)


    # skill-oriented body
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=4))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=5))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=6))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=7))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=8))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=9))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=10))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=11))
    db.session.add(Template_Field(template_id=1, field_id=4, page_order=12))
    db.session.add(Template_Field(template_id=1, field_id=5, page_order=13))
    db.session.add(Template_Field(template_id=1, field_id=5, page_order=14))


    # fundamental
    db.session.add(Template_Field(template_id=2, field_id=4, page_order=4))
    db.session.add(Template_Field(template_id=2, field_id=4, page_order=5))
    db.session.add(Template_Field(template_id=2, field_id=4, page_order=6))
    db.session.add(Template_Field(template_id=2, field_id=4, page_order=7))
    db.session.add(Template_Field(template_id=2, field_id=4, page_order=8))
    db.session.add(Template_Field(template_id=2, field_id=4, page_order=9))
    db.session.add(Template_Field(template_id=2, field_id=5, page_order=10))
    db.session.add(Template_Field(template_id=2, field_id=5, page_order=11))
    db.session.add(Template_Field(template_id=2, field_id=5, page_order=12))

    # internship
    db.session.add(Template_Field(template_id=3, field_id=4, page_order=4))
    db.session.add(Template_Field(template_id=3, field_id=4, page_order=5))
    db.session.add(Template_Field(template_id=3, field_id=4, page_order=6))
    db.session.add(Template_Field(template_id=3, field_id=4, page_order=7))
    db.session.add(Template_Field(template_id=3, field_id=5, page_order=8))


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_template_fields():
    db.session.execute('TRUNCATE template_fields CASCADE;')
    db.session.commit()
