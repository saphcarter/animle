import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException

# Error reports
total_error = 0
total_success = 0
total_tests = 6
tests_aborted = 0

# Add Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless") # Ensures no GUI
chrome_options.add_argument("--no-sandbox") # Ensures access permissions

# Setting path to chromedriver
webdriver_service = Service("./chromedriver/stable/chromedriver")

# Open browser with options and service
browser = webdriver.Chrome(service=webdriver_service, options=chrome_options)

# Get main page
browser.get("http://127.0.0.1:5000/")
browser.implicitly_wait(4) # poll for 4 seconds if needed

# ======================================================================

# Ensure user not logged in
print("Testing initial load")
try:
    userStatus = browser.find_element(By.ID, 'userStatus').get_attribute("innerHTML")
    browser.implicitly_wait(4) # poll for 4 seconds if needed
except NoSuchElementException:
    print("\t--> Error: Could not find id='userStatus' element")
    total_error += 1
else:
    if userStatus == "Login":
        print("\t--> Page renders with no user logged in")
        total_success += 1
    else:
        print("\t--> Error: user logged in already")
        total_error += 1
print("------------------------------------------------")

# ======================================================================

# There exists a test user with:
# username = tester
# email = tester@example.com
# password = TEST

# Testing login page
print("Testing logging in")
browser.get('http://localhost:5000/login')

try:
    browser.implicitly_wait(4) # poll for 4 seconds if needed
    username = browser.find_element(By.ID, "username")
    username.send_keys('tester')

    browser.implicitly_wait(4) # poll for 4 seconds if needed
    password = browser.find_element(By.ID, "password")
    password.send_keys('TEST')

    time.sleep(1) # Waiting for actions to occur

    # Submit 
    browser.implicitly_wait(4) # poll for 4 seconds if needed
    submit = browser.find_element(By.ID, 'submit')
    submit.click()
    time.sleep(1) # Waiting for actions to occur
except NoSuchElementException:
    print("\t--> Error: Could not find login elements on page")
    total_error += 1
else:
    try:
        # Results
        browser.implicitly_wait(4) # poll for 4 seconds if needed
        userStatus = browser.find_element(By.ID, 'userStatus').get_attribute("innerHTML")
    except NoSuchElementException:
        print("\t--> Error: Could not id='userStatus' element")
        total_error += 1
    else:
        if userStatus == "Logout":
            print("\t--> User logged in successfully")
            total_success += 1
        else:
            print("\t--> Error: user did not login successfully")
            browser.get('http://localhost:5000/')
            browser.implicitly_wait(2)
            total_error += 1
print("------------------------------------------------")

# ======================================================================

# Testing logout
logged_out = False
if userStatus == "Logout":
    try:
        print("Testing logout function")
        logout = browser.find_element(By.ID, 'userStatus')
        logout.click()
        time.sleep(1) # Waiting for actions to occur

        userStatus = browser.find_element(By.ID, 'userStatus').get_attribute("innerHTML")
        # Results
        if userStatus == "Login":
            print("\t--> User logged out successfully")
            total_success += 1
        else:
            print("\t--> Error: user did not logout successfully")
            total_error += 1
        logged_out = True
    except NoSuchElementException:
        print("\t--> Error: Could not find login elements on page")
        total_error += 1
else:
    print("Cannot test logout function due to previous failed test")
    tests_aborted += 1

print("------------------------------------------------")

# ======================================================================

if logged_out == True:
    # Testing register fails
    print("Testing failed regristration")
    browser.get('http://localhost:5000/register')

    try:
        browser.implicitly_wait(4) # poll for 4 seconds if needed
        username = browser.find_element(By.ID, "username")
        username.send_keys('tester')

        browser.implicitly_wait(4) # poll for 4 seconds if needed
        password = browser.find_element(By.ID, "email")
        password.send_keys('tester@')

        browser.implicitly_wait(4) # poll for 4 seconds if needed
        password = browser.find_element(By.ID, "password")
        password.send_keys('wrong')

        browser.implicitly_wait(4) # poll for 4 seconds if needed
        password = browser.find_element(By.ID, "password2")
        password.send_keys('wrongagain')

        time.sleep(2) # Waiting for actions to occur

        # Submit 
        browser.implicitly_wait(4) # poll for 4 seconds if needed
        submit = browser.find_element(By.ID, 'submit')
        submit.click()
        time.sleep(1) # Waiting for actions to occur
    except NoSuchElementException:
        print("\t--> Error: Could not find registration elements on page")
        total_error += 3
    else:
        try:
            # Results
            browser.implicitly_wait(4) # poll for 4 seconds if needed
            usernameError = browser.find_element(By.ID, 'username_error').get_attribute("innerHTML")
            

            browser.implicitly_wait(4) # poll for 4 seconds if needed
            emailError = browser.find_element(By.ID, 'email_error').get_attribute("innerHTML")

            browser.implicitly_wait(4) # poll for 4 seconds if needed   
            passwordError = browser.find_element(By.ID, 'password2_error').get_attribute("innerHTML")
        
        except NoSuchElementException:
            print("\t--> Error: Could not find response elements on page")
            total_error += 3
        else:
            if usernameError == "[Please use a different username.]":
                print("\t--> Duplicate username correctly detected")
                total_success += 1
            else:
                print("\t--> Error: username error not detected")
                total_error += 1

            if emailError == "[Invalid email address.]":
                print("\t--> Invalid email correctly detected")
                total_success += 1
            else:
                print("\t--> Error: email error not detected")
                total_error += 1

            if passwordError == "[Field must be equal to password.]":
                print("\t--> Password mismatch correctly detected")
                total_success += 1
            else:
                print("\t--> Error: password mismatch not detected")
                total_error += 1
else:
    print("Cannot test registration function due to previous failed test")
    tests_aborted += 1
print("------------------------------------------------")

# ======================================================================

print(f"Tests run: {total_tests-tests_aborted} out of {total_tests}")
print(f"Number of successful tests: {total_success}")
print(f"Number of failed tests: {total_error}")
print(f"Number of tests aborted due to previous errors: {tests_aborted}")

#Wait for 10 seconds
time.sleep(2)
browser.quit()