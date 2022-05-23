# animle
cits3403 group project.

### Purpose
The idea behind our game is an Australian animal guessing game. User feedback is based on 8 characteristics of each animal: classification (eg. Mammal), number of legs, a boolean for precense of a tail, wings, and/or flippers, size (S, M or L), climate (eg. Tropical) and it's endangered rating. There is a new animal to guess everyday and you have six guesses to get it right. 

The game begins with three hints available and reveals a new hint for every wrong answer. There is a answer submission box you can type in your answer. As you write the box populates a drop down list that matches your input with animals in the database, if any matches exist, to standardize user input. 

On submission your input is displayed in the table above the user input box with feedback on if you were right or wrong:

> If you were correct the submission box disappears, the row displaying your most recent input goes green and has a tick next to it. All the rows below your correct input populate with four ticks and go green as well. All the hints about the animal are displayed and if you are logged in, all your statistics are updated.

> If you were wrong, the table row displaying your most recent input turns red and a cross is put in the box next to it. One more hint is displayed. 

### Architecture
On initial load the page loads the 'gamepage', this displays the game and a navbar as well as links to other pages inside the hints box. The nav bar has a clickable heading "Animal Wilderness" and "Home" on the left hand side. These both take you to '/gamepage' which is also just '/' on startup. On the right hand side of the nav bar are clickable headings which take you to 'stats', 'login' and 'instructions' from left to right and are named accordingly. 

In the hints box is a string "Need help learning the rules? <u> Click here to find out!" </u> which also directs you to the intructions page. And below that is "Haven't logged in yet? Click to <u>login</u> or <u>register!"</u> which take you to login or register pages.

When logging in there is feedback if your username and matching password cannot be found in the database or either field is missing. On successful login you are redirected to the gamepage and the nav bar button that said login now says logout, your user is logged out if you click that.

When registering there are error feedbacks if your username or email are not unique, if your two password inputs do not match, your email is not valid or some fields are missing. On successful registration you are taken to the login page where you can now login.

### How to launch
launching has only been done from MacOS or WSL2 environment, please choose only these options or commands will not work.

Steps:
	1. Cd into the flask_app folder, run command:
		$ python3 -m venv venv
	This will take a while to run, don't worry.
	2. Then run this command which produces the following output indicating your venv successfully activated:
		$ source venv/bin/activate
		(venv) $ _
	3. Then with pip run:
		$ pip install -r requirements.txt
	4. This will install all the packages from our requirements file.
	5. Run this command:
		$ flask run
	6. This opens up the website at http://127.0.0.1:5000

### Unit tests
A python class unit test for testing models and their functions
    1. from WSL terminal, run command: 
        flask_app$ python3 models_test.py
    - This was our output 
        test_correct_login (__main__.ModelsTest) ... ok
        test_incorrect_login (__main__.ModelsTest) ... ok
        test_password_hashing (__main__.ModelsTest) ... ok
        test_register_non_unique_email (__main__.ModelsTest) ... ok
        test_register_non_unique_user (__main__.ModelsTest) ... ok
        test_registration (__main__.ModelsTest) ... ok

        ----------------------------------------------------------------------
        Ran 6 tests in 5.734s

        OK

### Commitlogs
Include commit logs, showing contributions and 

### Review from contributing students
