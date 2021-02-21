from flask.cli import AppGroup
from .users import seed_users, undo_users
from .default_tags import seed_default_tags, undo_default_tags
from .resumes import seed_resumes, undo_resumes
from .styles import seed_styles, undo_styles
from .template_fields import seed_template_fields, undo_template_fields

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_default_tags()
    seed_styles()
    seed_template_fields()
    seed_resumes()


    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_default_tags()
    undo_styles()
    undo_template_fields()
    undo_resumes()

    # Add other undo functions here
