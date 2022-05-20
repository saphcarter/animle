from datetime import datetime
from xmlrpc.client import Boolean
from app import db, login
from sqlalchemy import VARCHAR, create_engine
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Animals(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    Name = db.Column(db.VARCHAR(50), unique=True, nullable = False)
    Classification = db.Column(db.VARCHAR(50), nullable = False)
    Legs = db.Column(db.Integer, nullable = False)
    Tail = db.Column(db.Boolean, nullable = False)
    Wings = db.Column(db.Boolean, nullable = False)
    Flippers = db.Column(db.Boolean, nullable = False)
    Size = db.Column(db.VARCHAR(2), nullable = False)
    Climate = db.Column(db.VARCHAR(50), nullable = False)
    Endangered = db.Column(db.VARCHAR(50), nullable = False)
    Image = db.Column(db.String(120), default='')             #TODO: Need to add to DB

    def __repr__(self):     #how the object is printed if the 'Animal' object is printed
        return '{}>'.format(self.Name)        #print just the name


class Attempts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __repr__(self):
        return ('<User {}>'.format(self.user_id) + '<Number {}>'.format(self.number))


class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(128), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    attempts = db.relationship('Attempts', backref='author', lazy='dynamic')

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

@login.user_loader
def load_user(id):
    return Users.query.get(int(id))

#NOTE COMMENTED OUT AS DON'T NEED TO LOAD CSV INTO DB TWICE

# def pd_access():
#     # Username of your GitHub account
#     username = 'DougLewin'

#     # Personal Access Token (PAO) from your GitHub account
#     token = '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'

#     # Creates a re-usable session object with your creds in-built
#     github_session = requests.Session()
#     github_session.auth = (username, token)
        
#     # Downloading the csv file from your GitHub
#     url = "https://raw.githubusercontent.com/saphcarter/animle/SBX/flask_app/Animals_database.csv?token=GHSAT0AAAAAABUB5SDUGZONEPOUPHV35O4WYUEJGFA" # Make sure the url is the raw version of the file on GitHub
#     download = github_session.get(url).content

#     # Reading the downloaded content and making it a pandas dataframe
#     df = pd.read_csv(io.StringIO(download.decode('utf-8')))

#     # Printing out the first 5 rows of the dataframe to make sure everything is good
#     return df

# df = pd_access()


# ######################


# # engine = create_engine('sqlite:///df.db', echo=True)
# # sqlite_connection = engine.connect()

# def load_pd_df(df):
#     for index, animal in df.iterrows():
#         try:
#             Animal_data = Animals(
#                             Name = animal[0]
#                             ,Classification = animal[1]
#                             ,Legs = animal[2]
#                             ,Tail = animal[3]
#                             ,Wings = animal[4]
#                             ,Flippers = animal[5]
#                             ,Size = animal[6]
#                             ,Climate = animal[7]
#                             ,Endangered = animal[8]
#                             ,Image = animal[9])
#             db.session.add(Animal_data)
#             db.session.commit()
#         except:
#             print("Not possible")

# load_pd_df(df)