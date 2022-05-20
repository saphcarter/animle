# animle
project cits3403

If you get error --> "ERROR: Could not build wheels for pycairo which use PEP 517 and cannot be installed directly"
run command --> pip install --upgrade pip setuptools wheel
or run		--> pip3 install --upgrade pip

old package requirements:
Click==7.0
Flask==1.1.1
idna==2.8
importlib-metadata==1.5.0
itsdangerous==1.1.0
Jinja2==2.10.1
MarkupSafe==1.1.0
Werkzeug==0.16.1

Warning when running flask: "FSADeprecationWarning: SQLALCHEMY_TRACK_MODIFICATIONS adds significant overhead and will be disabled by default in the future.  Set it to True or False to suppress this warning."