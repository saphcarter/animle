from datetime import datetime, timedelta
import unittest
from app import app, db
from app.models import Animals, Users, Attempts

class UserModelCase(unittest.TestCase):
	#creates a test database that is not the real database
    def setUp(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://'
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_password_hashing(self):
        u = Users(username='Tim')
        u.set_password('cits3403isfun')
        self.assertFalse(u.check_password('cits3403sucks'))
        self.assertTrue(u.check_password('cits3403isfun'))

if __name__ == '__main__':
    unittest.main(verbosity=2)