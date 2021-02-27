"""empty message

Revision ID: 796c9e7ebb92
Revises: 
Create Date: 2021-02-26 11:25:56.090679

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '796c9e7ebb92'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('default_tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('fields',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.Column('placeholder', sa.String(length=1000), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('styles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('templates',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('resumes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('html', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('style_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['style_id'], ['styles.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('template_default_tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('default_tag_id', sa.Integer(), nullable=False),
    sa.Column('template_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['default_tag_id'], ['default_tags.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['template_id'], ['templates.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('template_fields',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('template_id', sa.Integer(), nullable=False),
    sa.Column('field_id', sa.Integer(), nullable=False),
    sa.Column('page_order', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['field_id'], ['fields.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['template_id'], ['templates.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('resume_fields',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('resume_id', sa.Integer(), nullable=False),
    sa.Column('field_id', sa.Integer(), nullable=False),
    sa.Column('page_order', sa.Integer(), nullable=False),
    sa.Column('value', sa.String(length=1000), nullable=False),
    sa.ForeignKeyConstraint(['field_id'], ['fields.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['resume_id'], ['resumes.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_resume_tags',
    sa.Column('user_tag_id', sa.Integer(), nullable=False),
    sa.Column('resume_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['resume_id'], ['resumes.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_tag_id'], ['user_tags.id'], onupdate='CASCADE', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('user_tag_id', 'resume_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_resume_tags')
    op.drop_table('resume_fields')
    op.drop_table('user_tags')
    op.drop_table('template_fields')
    op.drop_table('template_default_tags')
    op.drop_table('resumes')
    op.drop_table('users')
    op.drop_table('templates')
    op.drop_table('styles')
    op.drop_table('fields')
    op.drop_table('default_tags')
    # ### end Alembic commands ###