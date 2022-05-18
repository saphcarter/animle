from datetime import datetime
from xmlrpc.client import Boolean
from app import db
from sqlalchemy import VARCHAR
import csv

#TODO: For some reason 'from app.models import User' is resulting in an ImportError. Commented out temporarily to enable other work to be done.
# class Player(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(64), index=True, unique=True)
#     email = db.Column(db.String(120), index=True, unique=True)
#     password_hash = db.Column(db.String(128))

    # def __repr__(self):
    #     return '<Player {}>'.format(self.username)

   

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
    Image = db.Column(db.String(120), default='default.jpg')             #TODO: Need to add to DB

    def __repr__(self):     #how the object is printed if the 'Animal' object is printed
        return '{}>'.format(self.Name)        #print just the name



# def extract_csv():
#     with open("Users\dougl\Documents\GitHub\animle\Production\Animals_database.csv", 'r') as csv_file:
#         csv_reader = csv.reader(csv_file)

#     Name, Classification, Legs, Tail, Wings, Flippers, Size, Climate, Endangered, Image  = []

#     for row in csv_reader:
#         Name.append(row[0])
#         Classification.append(row[1])
#         Legs.append(row[2])
#         Tail.append(row[3])
#         Wings.append(row[4])
#         Flippers.append(row[5])
#         Size.append(row[6])
#         Climate.append(row[7])
#         Endangered.append(row[8])
#         Image.append(row[9])

#     return Name, Classification, Legs, Tail, Wings, Flippers, Size, Climate, Endangered, Image

# extract_csv()

from datetime import datetime
from xmlrpc.client import Boolean
from app import db
from sqlalchemy import VARCHAR, create_engine
import csv
import sqlite3
import pandas as pd
import requests
import io


#TODO: For some reason 'from app.models import User' is resulting in an ImportError. Commented out temporarily to enable other work to be done.
# class Player(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(64), index=True, unique=True)
#     email = db.Column(db.String(120), index=True, unique=True)
#     password_hash = db.Column(db.String(128))

    # def __repr__(self):
    #     return '<Player {}>'.format(self.username)

   

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
    Image = db.Column(db.String(120), default='default.jpg')             #TODO: Need to add to DB

    def __repr__(self):     #how the object is printed if the 'Animal' object is printed
        return '{}>'.format(self.Name, self.Classification)        #print just the name



#NOTE COMMENTED OUT AS DATA IS ALREADY LOADED INTO DB

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