"""get rid of table

Revision ID: 09968a31e3a5
Revises: 8cadf2b74f0b
Create Date: 2023-10-20 00:38:04.923045

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09968a31e3a5'
down_revision = '8cadf2b74f0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_rental_association')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_rental_association',
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.Column('rental_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['rental_id'], ['rentals.id'], name='fk_user_rental_association_rental_id_rentals'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='fk_user_rental_association_user_id_users')
    )
    # ### end Alembic commands ###
