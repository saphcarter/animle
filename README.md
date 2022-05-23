# Animle
cits3403 group project.

### Purpose
The idea behind our game is an Australian animal guessing game which educates users on endangered ratings of our precious wildlife. User feedback is based on 8 characteristics of each animal: classification (eg. Mammal), number of legs, whether or not the animal has a tail, wings, and/or flippers, the animal's size (S, M or L), it's typical climate (eg. Tropical) and it's endangered rating. There is a new animal to guess everyday and you have six guesses to get it right. 

The game begins with three hints available and reveals a new hint for every wrong answer. There is a answer submission box you can type in your answer. As you write the box populates a drop down list that matches your input with animals in the database, if any matches exist. If you attempt to input an animal not in the database or an animal you have guessed before, a message is flashed and the guess is cleared (not submitted). On submission your input is displayed in the table above the user input box with feedback on if you were right or wrong:

> If you were correct, the submission box disappears and the row displaying your most recent input goes green and has a tick next to it. All the rows below your correct input populate with four ticks and go green as well. All the hints about the animal are displayed and if you are logged in, all your statistics are updated.

> If you were wrong, the table row displaying your most recent input turns red and a cross is put in the box next to it. One more hint is displayed. If that was your last guess, the submission box disappears and is replaced with a message informing you have run out of guesses, and the correct answer.

### Architecture
On initial load the page loads the 'gamepage', this displays the game and a navbar as well as links to other pages inside the hints box. The nav bar has a clickable heading "Animal Wilderness" and "Home" on the left hand side. These both take you to '/gamepage' which is also just '/' on startup. On the right hand side of the nav bar are clickable headings which take you to 'stats', 'login' and 'instructions' from left to right and are named accordingly. 

In the social media footer box are two buttons, "Facebook" and "Twitter" which take you to those social media pages so you can share your results. There are also strings "Need help learning the rules? <ins> Click here to find out!" </ins> which directs you to the intructions page, "Want to Learn more? <ins>Click Here!</ins>" which takes you to a natureaustralia.org where you can learn about endangered aussie animals, and "Haven't logged in yet? Click to <ins>login</ins> or <ins>register!"</ins> which takes you to the login or register pages.

When logging in there is feedback if your username and matching password cannot be found in the database or either field is missing. On successful login you are redirected to the gamepage and the nav bar button that said login now says logout, your user is logged out if you click that.

When registering there are error feedbacks if your username or email are not unique, if your two password inputs do not match, your email is not valid or some fields are missing. On successful registration you are taken to the login page where you can now login.

### How to launch
launching has only been done from MacOS or WSL2 environment, please choose only these options or commands will not work.

Steps:
1. Cd into the flask_app folder, run command: (This will take a while to run, don't worry.)
		
        $ python3 -m venv venv
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

    2. This was our output 

        test_correct_login (__main__.ModelsTest) ... ok
        test_incorrect_login (__main__.ModelsTest) ... ok
        test_password_hashing (__main__.ModelsTest) ... ok
        test_register_non_unique_email (__main__.ModelsTest) ... ok
        test_register_non_unique_user (__main__.ModelsTest) ... ok
        test_registration (__main__.ModelsTest) ... ok

        ----------------------------------------------------------------------
        Ran 6 tests in 5.734s

        OK
A selenium python script w/ chrome driver that requires you to be running the localhost website simultaneously. This is due to issues with getting the driver to run from inside a unittest class. Obviously as this is not an isolated test class we do not add things to the database as they would be added to the main database which is not desirable.
    1. Follow 'how to launch' steps to run the website on local terminal
    2. From a seperate terminal (we used WSL) run:
        
        flask_app$ python3 selenium/chrome_test.py

    3. This was our output, this is obviously a fully successful output:
        
        Testing initial load
        --> Page renders with no user logged in
        ------------------------------------------------
        Testing logging in
                --> User logged in successfully
        ------------------------------------------------
        Testing logout function
                --> User logged out successfully
        ------------------------------------------------
        Testing failed regristration
                --> Duplicate username correctly detected
                --> Invalid email correctly detected
                --> Password mismatch correctly detected
        ------------------------------------------------
        Tests run: 6 out of 6
        Number of successful tests: 6
        Number of failed tests: 0
        Number of tests aborted due to previous errors: 0

    *If you read inside the chrome_test.py file, there are notes of how you can break the code so that exceptions are thrown and handled. This demonstrates what is outputted when the tests are unsuccessful (and that exceptions do not force the program to fail)
There is also a selenium python script w/ firefox driver that has the same requirements and is also not an isolated test class so we do not add things to the database here either. Follow the same steps for the chrome_test.py file but these changes
    2. From a seperate terminal (we used WSL) run:
       
        flask_app$ python3 selenium/firefox_test.py

    *Inside firefox_test.py file there are also notes on how you can break the code so that exceptions are thrown and handled. This demonstrates what is outputted when the tests are unsuccessful (and that exceptions do not force the program to fail)

### Commitlogs & Review from contributing students

