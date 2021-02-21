from app.models import db, Template_Field

# Adds a demo user, you can add other users here if you want
def seed_template_fields():

    main_header = Template_Field(name="main_header", resume_html="""<div>
      <div class="flex-horizontal-space_between">
        <h3>Full Name</h3>
        <p>GitHub Link</p>
      </div>
    </div>""", form_html="""<div>
      <input
        type="text"
        name="full_name"
        id="full_name"
        placeholder="Full Name"
      />
      <input
        type="text"
        name="github_link"
        id="github_link"
        placeholder="GitHub"
      />
    </div>""")

    contact = Template_Field(name="contact", resume_html="""<div class="flex-vertical-align_start">
      <div class="flex-horizontal-space_between">
        <p>City</p>
        <p>Phone Number</p>
      </div>
      <div class="flex-horizontal-space_between">
        <p>LinkedIn</p>
        <p>Email</p>
      </div>
    </div>""", form_html="""    <div>
      <input type="text" name="city" id="city" placeholder="City" />
      <input
        type="text"
        name="phone_number"
        id="phone_number"
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="linkedin_link"
        id="linkedin_link"
        placeholder="LinkedIn"
      />
      <input type="email" name="email" id="email" placeholder="Email" />
    </div>""")

    introduction = Template_Field(name="introduction", resume_html="""<div class="flex-vertical-align_start">
      <p>Title</p>
      <p>Mission</p>
      <p>Long Description</p>
    </div>""", form_html="""<input
      type="textarea"
      name="title"
      id="title"
      placeholder="Title (Ex. Full Stack Software Engineer)"
    />
    <textarea
      name="Descriptors"
      id="Descriptors"
      placeholder="Mission (Ex.Spearhead multidisciplinary & novel approaches to increase workplace efficiency)"
    ></textarea>
    <textarea
      name="long_description"
      id="long_description"
      placeholder="Long Description (Ex.Pragmatic self-starter that designs tools and models using current technology to solve complex problems with combination of engineering knowledge and computer science programming methods.  Leverage experience in engineering lab research, computer science, athletic leadership positions, and high-pressure industrial environments to create and progress positive and attainable work goals and communicate essential information to teams of different backgrounds and exposure levels.)"
    ></textarea>""")

    skill = Template_Field(name="skill", resume_html="""<div class="flex-vertical-align_start">
      <li>Skill</li>
    </div>""", form_html="""<input
      type="textarea"
      name="skill"
      id="skill"
      placeholder="Skill (Ex. Kicking Ass)"
    />""")

    work_experience = Template_Field(name="work_experience", resume_html="""<div class="flex-vertical-align_start">
      <div class="flex-horizontal-align-start">
        <h3>Company</h3>
        <p>Job Location</p>
      </div>
      <h4>Job Title</h4>
      <p>Job Description</p>
      <div>
        <li>Key Responsibility</li>
        <li>Key Responsibility</li>
        <li>Key Responsibility</li>
      </div>
    </div>""", form_html="""<input type="text" name="company_name" placeholder="Company" />
    <input type="text" name="job_location" placeholder="Job Location" />
    <input type="text" name="job_title" placeholder="Job Title" />
    <input
      type="textarea"
      name="job_description"
      id="job_description"
      placeholder="Job Description)"
    />
    <input
      type="textarea"
      name="key_responsibility"
      id="key_responsibility"
      placeholder="Key Responsibility"
    />
    <input
      type="textarea"
      name="key_responsibility"
      id="key_responsibility"
      placeholder="Key Responsibility"
    />
    <input
      type="textarea"
      name="key_responsibility"
      id="key_responsibility"
      placeholder="Key Responsibility"
    />""")

    db.session.add(main_header)
    db.session.add(contact)
    db.session.add(introduction)
    db.session.add(skill)
    db.session.add(work_experience)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_template_fields():
    db.session.execute('TRUNCATE template_fields;')
    db.session.commit()
