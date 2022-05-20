from datetime import datetime, timedelta
import unittest, os
from app import app, db
from app.models import Animals, Users, Attempts

class UserModelCase(unittest.TestCase):
	#creates a test database that is not the real database
    def setUp(self):
        basedir = os.path.abspath(os.path.dirname(__file__))
        app.config['SQLALCHEMY_DATABASE_URI'] =\
            'sqlite:///' + os.path.join(basedir, 'test.db')
        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        self.app = app.test_client()
        db.create_all()
        
    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_password_hashing(self):
        u = Users(username='Tim')
        u.set_password('cits3403isfun')
        self.assertFalse(u.check_password('cits3403sucks'))
        self.assertTrue(u.check_password('cits3403isfun'))

    def login(self, username, password):
        return self.app.post('/login', data=dict(
            username=username,
            password=password
        ), follow_redirects=True)

    def test_incorrect_login(self):
        u = Users(username = 'testcase', email = 'test@example.com')
        u.set_password('TEST')
        db.session.add(u)
        db.session.commit()
        response = self.login('testcase','wrongpassword')
        self.assertIn(b'Invalid username or password', response.data)

    def test_correct_login(self):
        u = Users(username = 'testcase', email = 'test@example.com')
        u.set_password('correctpassword')
        db.session.add(u)
        db.session.commit()
        self.login('testcase','correctpassword')
        login = self.app.get('/',follow_redirects=True)
        self.assertIn(login.data, self.app.get('/gamepage').data)


if __name__ == '__main__':
    unittest.main(verbosity=2)