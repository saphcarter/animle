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
#### Python Class Unit Test
A python class which tests our models and their functions in a closed testing environment.
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
#### Selenium Script w/ Chrome
A selenium python script w/ chrome driver that requires you to be running the localhost website simultaneously. This is due to issues with getting the driver to run from inside a unittest class. Obviously as this is not an isolated test class we do not add things to the database as they would be added to the main database which is not desirable.
1. Follow 'how to launch' steps to run the website on local terminal.
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

*If you read inside the chrome_test.py file, there are notes of how you can break the code so that exceptions are thrown and handled. This demonstrates what is outputted when the tests are unsuccessful (and that exceptions do not force the program to fail).
#### Selenium Script w/ Firefox
There is also a selenium python script w/ firefox driver that has the same requirements and is also not an isolated test class so we do not add things to the database here either. Follow the same steps for the chrome_test.py file but this change to step 2.
       
        flask_app$ python3 selenium/firefox_test.py
*Inside firefox_test.py file there are also notes on how you can break the code so that exceptions are thrown and handled. This demonstrates what is outputted when the tests are unsuccessful (and that exceptions do not force the program to fail).

### Commitlogs & Review from contributing students

git log --graph --abbrev-commit --date=short --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(auto)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all



git log --graph --abbrev-commit --decorate --all --date-order --date=format:'%d %b %H:%M' --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%ad%C(reset) %C(bold green)(%ar)%C(reset)%C(auto)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' 

* 2381564 - 23 May 13:55 (43 minutes ago) (HEAD -> main, origin/main, origin/HEAD)
| '          Update README.md - saphcarter
* e5f2116 - 23 May 13:45 (53 minutes ago)
| '          Update README.md - saphcarter
* 556495d - 23 May 13:30 (67 minutes ago)
| '          figuring out read me styling - saphcarter
* 2dc4a47 - 23 May 13:29 (69 minutes ago)
| '          cleanup & read me updates - saphcarter
* 5f76843 - 23 May 12:39 (2 hours ago)
| '          readme and comments touch ups - saphcarter
*   837414d - 23 May 12:10 (2 hours ago)
|\  '          Merge branch 'main' of https://github.com/saphcarter/animle - saphcarter
* | 039ecba - 23 May 12:09 (2 hours ago)
| | '          turning off track sql, readme style - saphcarter
| * 0716edd - 23 May 11:49 (3 hours ago)
| | '          adding comments - DiddlyDiPotato
| *   c8e3296 - 23 May 11:41 (3 hours ago)
| |\  '          Merge pull request #14 from saphcarter/SBX - saphcarter
| | *   c9e2d0a - 23 May 11:33 (3 hours ago) (origin/SBX, SBX)
| | |\  '          Merge branch 'main' of https://github.com/saphcarter/animle into SBX - saphcarter
| | |/
| |/|
| | *   f3e8731 - 23 May 11:27 (3 hours ago)
| | |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - saphcarter
| | * | 15ad1d1 - 23 May 11:27 (3 hours ago)
| | | | '          html validator requirements - saphcarter
| | | *   150673d - 23 May 11:09 (3 hours ago)
| | | |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| | | |/
| | |/|
| | | * 5b96f23 - 23 May 11:09 (3 hours ago)
| | | | '          final implementation of javascript with functionality without stats - Tarrant Reimers
| | * | 7802a6c - 23 May 10:27 (4 hours ago)
| | |\| '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - saphcarter
| | * | a50100f - 23 May 10:26 (4 hours ago)
| | | | '          html passing validator - saphcarter
| | | *   62d3246 - 23 May 10:23 (4 hours ago)
| | | |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| | | |/
| | |/|
| | | * d86434e - 23 May 10:23 (4 hours ago)
| | | | '          complete functionality of game other than user stats - Tarrant Reimers
* | | | 8c02ec3 - 23 May 09:46 (5 hours ago)
|/ / /  '          Update README.md - saphcarter
| * / 1fd4582 - 23 May 09:37 (5 hours ago)
| |/  '          Update gamepage.html - saphcarter
| * 2038617 - 23 May 09:06 (6 hours ago)
| | '          fixing hints again - in progress - Tarrant Reimers
| * b6e8580 - 23 May 08:56 (6 hours ago)
| | '          Style and readability - DougLewin
| * 28d48dd - 23 May 08:55 (6 hours ago)
| | '          Commenting and cleanliness - DougLewin
| * b64a681 - 23 May 08:43 (6 hours ago)
| | '          Added Learn more link - DougLewin
| *   4989540 - 23 May 08:37 (6 hours ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| * | 8c8f473 - 23 May 08:37 (6 hours ago)
| | | '          Working on JS hints functionality - Tarrant Reimers
| | * 54ce062 - 23 May 08:17 (6 hours ago)
| |/  '          Fixing css bug - DougLewin
| *   3b5ee17 - 22 May 23:02 (16 hours ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| * | e9f04d9 - 22 May 23:02 (16 hours ago)
| | | '          Implementing hints - Tarrant Reimers
| | * 24b1d17 - 22 May 21:33 (17 hours ago)
| | | '          syntax fixes - DougLewin
| | * 58e7b71 - 22 May 21:20 (17 hours ago)
| |/  '          Syntax corrections in CSS - DougLewin
| | * 1581a71 - 22 May 20:58 (18 hours ago) (origin/game-animal-names)
| | | '          comments - DiddlyDiPotato
| | * 3615d26 - 22 May 20:50 (18 hours ago)
| | | '          working yay Added ajax routes Added promise to get the data from jquery added python endpoint to get animals created instance to store animals from db - DiddlyDiPotato
* | | 867a8a1 - 22 May 20:42 (18 hours ago)
| | | '          Update super-linter.yml - DougLewin
* | |   024e635 - 22 May 20:41 (18 hours ago)
|\ \ \  '          Merge pull request #12 from saphcarter/Workflow - DougLewin
| | | * 0529fe4 - 22 May 20:41 (18 hours ago)
| | | | '          nearly working solution - DiddlyDiPotato
| * | | 3e79239 - 22 May 20:40 (18 hours ago)
|/ / /  '          Create super-linter.yml - DougLewin
* | | 151f4b7 - 22 May 20:22 (18 hours ago)
| | | '          Update README.md - saphcarter
| * | 3f97dc5 - 22 May 18:34 (20 hours ago)
| | | '          Social Media Sharing - DougLewin
| | *   fe0478d - 22 May 17:12 (21 hours ago)
| | |\  '          Merge branch 'main' into game-animal-names - DiddlyDiPotato
| |_|/
|/| |
| | * 9243fa9 - 22 May 16:50 (22 hours ago)
| | | '          Added endpoint called /answers returns animal names - DiddlyDiPotato
* | |   719142b - 22 May 16:43 (22 hours ago)
|\ \ \  '          Merge branch 'main' of https://github.com/saphcarter/animle - saphcarter
* | | | 3e3524d - 22 May 16:43 (22 hours ago)
| | | | '          Update .gitignore - saphcarter
| * | | ba1d73b - 22 May 16:40 (22 hours ago)
| | | | '          Update README.md - saphcarter
| * | | e9e2c8e - 22 May 16:32 (22 hours ago)
|/| | | '          Merge pull request #10 from saphcarter/SBX - DougLewin
| |/ /
| * | 09b2ac6 - 22 May 16:25 (22 hours ago)
| | | '          Database javascript - DougLewin
| * | cd86152 - 22 May 16:11 (22 hours ago)
| | | '          rollback - Tarrant Reimers
| * | 3cea3c4 - 22 May 15:15 (23 hours ago)
| |/  '          db server render - saphcarter
| * 29b894a - 22 May 14:27 (24 hours ago)
| | '          adding in seed from date for target animal - Tarrant Reimers
| *   e77bb10 - 22 May 13:35 (25 hours ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| * | 1c85117 - 22 May 13:34 (25 hours ago)
| | | '          Playing around with models and javascript - Tarrant Reimers
| | * 3734410 - 22 May 13:30 (25 hours ago)
| | | '          delim add - saphcarter
| | * 9d721de - 22 May 13:29 (25 hours ago)
| |/  '          accessing database server side for client side rendering - saphcarter
| * 5ae786d - 22 May 10:14 (28 hours ago)
| | '          Linking db - DougLewin
| * ff36fe9 - 22 May 09:37 (29 hours ago)
| | '          Update Animals_database.csv - DougLewin
| * b9eea1f - 22 May 09:32 (29 hours ago)
| | '          clearing dodgy animals database - Tarrant Reimers
| * 7fac7d2 - 22 May 09:24 (29 hours ago)
| | '          fix functionality of js again - Tarrant Reimers
| *   15f5c41 - 21 May 15:45 (2 days ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - saphcarter
| * | 022747b - 21 May 15:44 (2 days ago)
| | | '          Update .gitignore - saphcarter
| * | 366cbf8 - 21 May 15:41 (2 days ago)
| | | '          update tester files - saphcarter
| | *   e97df4f - 21 May 14:13 (2 days ago)
| | |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| | |/
| |/|
| | * 7032ae5 - 21 May 14:12 (2 days ago)
| | | '          fixing functionality of autocomplete function - Tarrant Reimers
| * | b4e2b02 - 21 May 11:43 (2 days ago)
| |/  '          selenium, web browser test - saphcarter
| *   8728685 - 21 May 08:08 (2 days ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| * | abcce80 - 21 May 08:07 (2 days ago)
| | | '          playing around with the models and gamepage, nothing really important - Tarrant Reimers
| * | 90d1879 - 21 May 08:07 (2 days ago)
| | | '          Identifying problem with autocomplete - Tarrant Reimers
| | *   f8c8a95 - 20 May 21:37 (3 days ago)
| | |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - saphcarter
| | * | be6923b - 20 May 21:37 (3 days ago)
| | | | '          html/config updates for unit tests - saphcarter
| | * | 10db547 - 20 May 21:36 (3 days ago)
| | | | '          added selenium test, updated tests.py - saphcarter
| | * | eb90af7 - 20 May 21:35 (3 days ago)
| | | | '          Update requirements.txt - saphcarter
| | | *   c598fcd - 20 May 19:09 (3 days ago)
| | | |\  '          commit on 'SBX' - DiddlyDiPotato
| | |_|/
| |/| |
| | | * 33d3fd8 - 20 May 19:03 (3 days ago)
| | | | '          ] - DiddlyDiPotato
| | | * a8afe95 - 20 May 18:58 (3 days ago)
| | | | '          Autocomplete JS - DiddlyDiPotato
| | | * f817e21 - 20 May 18:50 (3 days ago)
| | | | '          Autocomplete function - DiddlyDiPotato
| | | * 68bfb9a - 20 May 18:49 (3 days ago)
| | | | '          I have added an autocomplete function but still trying to get it connect to the js function - DiddlyDiPotato
| * | | d9d96a0 - 20 May 17:14 (3 days ago)
| |\| | '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| * | | 0cd7119 - 20 May 17:14 (3 days ago)
| | | | '          Completing the autocomplete function - Tarrant Reimers
| | * | 60641ce - 20 May 16:45 (3 days ago)
| | | | '          removing extra spaces - saphcarter
| | * |   0a11e78 - 20 May 16:17 (3 days ago)
| | |\ \  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - saphcarter
| | |/ /
| |/| |
| | * | 003e69d - 20 May 16:16 (3 days ago)
| | | | '          update requirements.txt and readme - saphcarter
| * | |   bde4680 - 20 May 15:36 (3 days ago)
| |\ \ \  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| | | |/
| | |/|
| * | | e44572b - 20 May 15:36 (3 days ago)
| | | | '          Fixed up javascript for game functionality - hints appearing with guesses - Tarrant Reimers
| | * | 05a56f4 - 20 May 14:44 (3 days ago)
| | |\| '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - DiddlyDiPotato
| | | * 8ffdb42 - 20 May 14:36 (3 days ago)
| | |/  '          unit tests for login - saphcarter
| |/|
| * | c12a0bc - 20 May 13:06 (3 days ago)
| | | '          Create tests.py - saphcarter
| * | 67a9b41 - 20 May 11:11 (3 days ago)
| | | '          minor style changes for consistency - saphcarter
| * | 6fed3ac - 20 May 10:21 (3 days ago)
|/ /  '          requirements.txt update - saphcarter
| * 39a8160 - 20 May 01:15 (4 days ago)
|/  '          Attemping to pull the names from the animals database so I can add that variable to the HTML, its not much as Ive had to get rid of a lot of the code because the app wouldnt run, - DiddlyDiPotato
*   3999721 - 19 May 10:09 (4 days ago)
|\  '          Merge pull request #9 from saphcarter/SBX - DougLewin
| *   df89c6a - 19 May 10:08 (4 days ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - DougLewin
| * | 275725d - 19 May 10:08 (4 days ago)
| | | '          Database adjustments. Removed Dropdown from menu - DougLewin
| | * 018fc22 - 19 May 10:05 (4 days ago)
| | | '          Rename Testing/Updating_Database_Instructions.txt to Developer_Guide/Updating_Database_Instructions.txt - DougLewin     
| | * 9df2678 - 19 May 10:04 (4 days ago)
| | | '          Rename Production/White_Box_Database_Testing.txt to Testing/White_Box_Database_Testing.txt - DougLewin
| | * 0afc939 - 19 May 10:04 (4 days ago)
| | | '          Rename Production/Testing/Updating_Database_Instructions.txt to Testing/Updating_Database_Instructions.txt - DougLewin  
| | * 101ee22 - 19 May 10:03 (4 days ago)
| | | '          Rename Production/Updating_Database_Instructions.txt to Production/Testing/Updating_Database_Instructions.txt - DougLewin
| | * a9edf2e - 19 May 10:02 (4 days ago)
| | | '          Rename Updating Database Instructions to Updating_Database_Instructions.txt - DougLewin
| | * 48ad509 - 19 May 10:02 (4 days ago)
| | | '          Create White_Box_Database_Testing.txt - DougLewin
| | * eda01d7 - 19 May 10:00 (4 days ago)
| |/  '          Create Updating Database Instructions - DougLewin
| * 8ac5d7b - 18 May 21:31 (5 days ago)
| | '          adding another requirements that is less complex and works for Tarrant (original doesn't seem to work) - Tarrant Reimers  
| * 4a4a1ca - 18 May 21:31 (5 days ago)
| | '          updating JS for user functionality (revealing all clues when guess correct) - Tarrant Reimers
| * d85b2c6 - 18 May 21:30 (5 days ago)
| | '          pretty much completing forms for logging in and registering users - Tarrant Reimers
| * 6dce1fd - 18 May 18:07 (5 days ago)
| | '          working through mega tutorial and implementing login mechanism - Tarrant Reimers
| *   d8fc34d - 18 May 16:28 (5 days ago)
| |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - Tarrant Reimers
| * | 8b91c01 - 18 May 16:28 (5 days ago)
| | | '          no input error handling and adding in users/attempts databases - Tarrant Reimers
| | *   f6f1438 - 18 May 16:21 (5 days ago)
| | |\  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - DiddlyDiPotato
| | |/
| |/|
| | * 86c26d1 - 18 May 16:09 (5 days ago)
| | | '          Getting the randomizing of animals in row inputer function to work in - DiddlyDiPotato
| * | 2583d33 - 18 May 15:45 (5 days ago)
| | | '          added in user and attempts classes to models.py - Tarrant Reimers
| * | 8ceecad - 18 May 15:44 (5 days ago)
| | | '          allows 'enter' key to submit the animal guess - Tarrant Reimers
| * | 1aef4f1 - 18 May 14:53 (5 days ago)
| |/  '          updated instructions with the actual instructions - Tarrant Reimers
| * f5e2840 - 18 May 14:10 (5 days ago)
| | '          added instructions in navbar and added route - Tarrant Reimers
| * c64e264 - 18 May 13:05 (5 days ago)
| | '          updating the user interface using the JS and HTML - Tarrant Reimers
| * 908ea26 - 18 May 10:17 (5 days ago)
| | '          Cleaning up models.py - DougLewin
| * 25a6905 - 18 May 10:07 (5 days ago)
| | '          Added Animals to DB - DougLewin
| * 8b5a0ed - 18 May 09:17 (5 days ago)
| | '          Add files via upload - DougLewin
| * 4544937 - 18 May 09:16 (5 days ago)
| | '          Delete Animals_database.csv - DougLewin
| * fc3bf07 - 18 May 09:15 (5 days ago)
| | '          Add files via upload - DougLewin
| * 54a9d5d - 18 May 09:15 (5 days ago)
| | '          Delete Animals_database.csv - DougLewin
| * 62c7bdc - 18 May 09:13 (5 days ago)
| | '          Add files via upload - DougLewin
| * eb5a0a0 - 18 May 09:12 (5 days ago)
| | '          Delete Animals_database.csv - DougLewin
| * b431e42 - 18 May 09:11 (5 days ago)
| | '          Add files via upload - DougLewin
| * e23313f - 18 May 09:11 (5 days ago)
| | '          Delete Animals_database.csv - DougLewin
| *   93b5e42 - 18 May 09:10 (5 days ago)
| |\  '          Merge pull request #8 from saphcarter/main - DougLewin
| |/
|/|
* | 44dcb91 - 18 May 08:52 (5 days ago)
| | '          Add files via upload - DougLewin
* | b4a2e3f - 18 May 08:51 (5 days ago)
| | '          Delete Animals_database.csv - DougLewin
* | 520cfc0 - 18 May 08:50 (5 days ago)
| | '          Update Animals_database.csv - DougLewin
| *   cdaebae - 17 May 11:31 (6 days ago)
| |\  '          Merge pull request #7 from saphcarter/main - DougLewin
| |/
|/|
* | 961e0d3 - 17 May 10:47 (6 days ago)
|\| '          Merge pull request #6 from saphcarter/SBX - tazreimers
| * 22dc2cf - 17 May 10:15 (6 days ago)
| | '          Rename flask_app/Animals_database.csv to flask_app/app/Animals_database.csv - DougLewin
| * efbe5d4 - 16 May 09:03 (7 days ago)
| | '          Bug fix - DougLewin
| * 37d0a56 - 15 May 21:00 (8 days ago)
| | '          Progress on database connection - DougLewin
| * a1373a7 - 15 May 18:56 (8 days ago)
| | '          Added the Animals class to the database model - DougLewin
| * 157f897 - 14 May 11:05 (9 days ago)
| | '          Update models.py - DiddlyDiPotato
| *   d1c143f - 14 May 08:38 (9 days ago)
| |\  '          Merge pull request #5 from saphcarter/main - DougLewin
| |/
|/|
| | *   d9dbe25 - 13 May 19:45 (10 days ago) (refs/stash)
| | |\  '          On first_flask_app: !!GitHub_Desktop<first_flask_app> - saphcarter
| | | * 1602f68 - 13 May 19:45 (10 days ago)
| | |/  '          index on first_flask_app: 494ea73 Update base.html - saphcarter
| * |   00e6d6b - 10 May 11:11 (13 days ago)
| |\ \  '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - saphcarter
* | \ \   76a22a8 - 10 May 11:11 (13 days ago)
|\ \ \ \  '          Merge branch 'SBX' of https://github.com/saphcarter/animle - saphcarter
| | |/ /
| |/| |
* | | | 122f523 - 10 May 11:09 (13 days ago)
| | | | '          Update .gitignore - saphcarter
| | * | d750d04 - 10 May 11:05 (13 days ago)
| | | | '          moved social footer to base.html - saphcarter
| * | | d365dd9 - 09 May 07:57 (2 weeks ago)
| | | | '          comment - DougLewin
| * | | 13b957d - 09 May 07:54 (2 weeks ago)
| |\| | '          Merge branch 'SBX' of https://github.com/saphcarter/animle into SBX - DougLewin
| * | | 0c12405 - 09 May 07:54 (2 weeks ago)
| | | | '          changed colour of text - DougLewin
| * | | 8356cfe - 09 May 07:53 (2 weeks ago)
| | | | '          changed some style in stats page - DougLewin
| * | | 44b608b - 09 May 07:50 (2 weeks ago)
| | | | '          Changed some text in 'stats'. Checking vscode - DougLewin
| | * | 97b974a - 08 May 17:56 (2 weeks ago)
| |/ /  '          Update requirements.txt - saphcarter
| * | 8c80bc1 - 08 May 17:53 (2 weeks ago)
| | | '          Create requirements.txt - saphcarter
| * | 327b4a0 - 08 May 17:38 (2 weeks ago)
| | | '          Update .flaskenv - saphcarter
| * | 8aeb4ed - 07 May 18:37 (2 weeks ago)
| | | '          main merge commits - saphcarter
| * | 7232d1a - 07 May 18:33 (2 weeks ago)
| | | '          Merge branch 'main' of https://github.com/saphcarter/animle into SBX - saphcarter
| * | b2d601e - 04 May 17:54 (3 weeks ago)
| | | '          fixed javascript linking issue - saphcarter
| * | e2b2d22 - 03 May 19:25 (3 weeks ago)
| | | '          scripts - saphcarter
| * |   ff11f31 - 03 May 16:38 (3 weeks ago)
| |\ \  '          Merge branch 'main' of https://github.com/saphcarter/animle into SBX - saphcarter
| |/ /
|/| |
* | |   76fc8cb - 03 May 16:33 (3 weeks ago)
|\ \ \  '          Merge pull request #3 from saphcarter/Musts-and-Shoulds - saphcarter
* \ \ \   90f131f - 03 May 16:32 (3 weeks ago)
|\ \ \ \  '          Merge pull request #4 from saphcarter/main_reconfigure - saphcarter
| | | * | 3cebfec - 03 May 13:44 (3 weeks ago)
| | | | | '          base.html inheritence - saphcarter
| * | | | dedf53a - 03 May 12:19 (3 weeks ago)
|/ / / /  '          fixed nav bar and moved CSS and JS - saphcarter
| | * | bc51ae7 - 03 May 12:13 (3 weeks ago)
| | | | '          adding static files - saphcarter
| | * | f877d04 - 03 May 10:44 (3 weeks ago)
| | | | '          __init__.py file - saphcarter
| | * | 7383633 - 03 May 10:43 (3 weeks ago)
| | | | '          fixed nav bar issue - saphcarter
| | * | db7cf90 - 03 May 10:42 (3 weeks ago)
| | | | '          create templates for flask app - saphcarter
| | * | 25106d9 - 03 May 10:42 (3 weeks ago)
| | | | '          create routes.py - saphcarter
| | * | 88ee929 - 03 May 10:41 (3 weeks ago)
| | | | '          create login form - saphcarter
| | * | 1dd039c - 03 May 10:40 (3 weeks ago)
| | | | '          .gitignore pychache - saphcarter
| | * | 635b497 - 03 May 10:05 (3 weeks ago)
| | |/  '          Update .gitignore - saphcarter
| * |   66eeb8c - 03 May 07:54 (3 weeks ago) (Musts-and-Shoulds)
| |\ \  '          Merge pull request #2 from saphcarter/main - DougLewin
| |/ /
|/| |
| | * 494ea73 - 02 May 20:09 (3 weeks ago) (first_flask_app)
| | | '          Update base.html - saphcarter
| | * 87d15b1 - 01 May 20:19 (3 weeks ago)
| | | '          flask app beginning - saphcarter
| | *   890cf73 - 01 May 20:14 (3 weeks ago)
| | |\  '          Merge branch 'main' of https://github.com/saphcarter/animle into first_flask_app - saphcarter
| |_|/
|/| |
| | * 36c247e - 01 May 19:30 (3 weeks ago)
| | | '          Update projectdescription.txt - saphcarter
* | | d082985 - 30 Apr 16:31 (3 weeks ago)
| | | '          fixed branch merge - saphcarter
* | | 5b3a1a4 - 30 Apr 15:44 (3 weeks ago)
| |/  '          Create .gitignore - saphcarter
|/|
* |   9443441 - 27 Apr 17:33 (4 weeks ago)
|\ \  '          Merge branch 'Sapphire' - saphcarter
* | | 8359f84 - 25 Apr 11:50 (4 weeks ago)
| | | '          Implement each guess - tazreimers
* | | 585be31 - 25 Apr 11:43 (4 weeks ago)
| | | '          update game model - saphcarter
* | |   720e495 - 25 Apr 10:43 (4 weeks ago)
|\ \ \  '          Merge branch 'main' of https://github.com/saphcarter/animle - tazreimers
* | | | 5f27311 - 25 Apr 10:39 (4 weeks ago)
| | | | '          .DS files (need to delete) - tazreimers
* | | | 261d74e - 25 Apr 10:38 (4 weeks ago)
| | | | '          Upload Javascript file - tazreimers
* | | | eeea0ec - 25 Apr 10:38 (4 weeks ago)
| | | | '          Renaming of CSS and HTML - tazreimers
* | | | d855d4b - 25 Apr 10:34 (4 weeks ago)
| | | | '          Update HTML to reflect model - tazreimers
| * | | ef12ad1 - 25 Apr 10:11 (4 weeks ago)
|/ / /  '          added comment - saphcarter
| * | ab69c40 - 22 Apr 18:47 (4 weeks ago)
| | | '          Update Home_page.html - saphcarter
| * | 03e37e8 - 22 Apr 18:40 (4 weeks ago)
|/ /  '          added autocomplete input box - saphcarter
* | 8fe1b47 - 21 Apr 17:17 (5 weeks ago)
| | '          Add files via upload - DougLewin
* | c532823 - 21 Apr 16:09 (5 weeks ago)
| | '          Update Design Requirements.txt - tazreimers
* | 1119d96 - 21 Apr 16:00 (5 weeks ago)
| | '          Update Design Requirements.txt - tazreimers
* | 41f696b - 20 Apr 16:22 (5 weeks ago)
| | '          Rename Animals_database.csv to Production/Animals_database.csv - DougLewin
* | 72b8434 - 20 Apr 16:21 (5 weeks ago)
| | '          README - DougLewin
* | 01ea4a5 - 20 Apr 16:20 (5 weeks ago)
| | '          Add files via upload - DougLewin
| * 0e687eb - 20 Apr 08:02 (5 weeks ago)
| | '          Delete MSC planning.xlsx - DougLewin
| * 7b75b60 - 20 Apr 08:01 (5 weeks ago)
| | '          Add files via upload - DougLewin
| * ac6b1b2 - 20 Apr 07:58 (5 weeks ago)
| | '          Add files via upload - DougLewin
| * 4abf430 - 19 Apr 12:16 (5 weeks ago)
| | '          Add files via upload - saphcarter
| * b6cb415 - 18 Apr 16:22 (5 weeks ago)
|/  '          Add files via upload - DougLewin
* 0b0ce22 - 18 Apr 16:07 (5 weeks ago)
| '          Create Design Requirements.txt - DougLewin
* 04f448f - 12 Apr 13:40 (6 weeks ago)
| '          Create projectdescription.txt - saphcarter
* 9532bba - 12 Apr 13:39 (6 weeks ago)
  '          Initial commit - saphcarter