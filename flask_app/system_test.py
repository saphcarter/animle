from datetime import datetime, timedelta
import unittest, os, time
from app import app, db
from app.models import Animals, Users, Attempts
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from config import basedir

class SystemTest(unittest.TestCase):
    driver = None

    def setUp(self):
        path = "r`/mnt/c/Users/sapph/AppData/Roaming/Microsoft/Windows/Start Menu" +\
             "/Programs/Python 3.10/selenium-2.53.1/py/selenium/webdriver"
        self.driver = webdriver.Firefox(path)

        if not self.driver:
            self.skipTest("Web browser not available")
        else:
            db.init_app(app)
            db.create_all()
            u1 = Users(username='saph', email='saph@example.com', password='safe')
            db.session.add(u1)
            db.session.commit()
            self.driver.maximize_window()
            self.driver.get('http://localhost:5000/')

    def tearDown(self):
        self.driver.close()
        db.session.query(Users).delete()
        db.session.commit()
        db.session.remove()

    def test_login(self):
        u1 = Users.query.filter_by(username='saph').first()
        self.assertEquals(u1.email, 'saph@example.com', msg='user exists in db')
        self.assertTrue(u1.check_password('safe'), msg='password set correctly')
        self.driver.get('http://localhost:5000/login')
        self.driver.implicitly_wait(4)
        username = self.driver.find_element_by_id('username')
        username.send_keys('saph')
        password = self.driver.find_element_by_id('password')
        password.send_keys('safe')
        time.sleep(1)
        self.driver.implicitly_wait(5)
        submit = self.driver.find_element_by_id('submit')
        submit.click()
        self.driver.implicitly_wait(5)
        time.sleep(1)
        userStatus = self.driver.find_element_by_id('userStatus')
        self.assertEquals(userStatus.get_attribute('innerHTML'), 'Logout', msg='logged in')

    if __name__ == '__main__':
        unittest.main(verbosity=2)
