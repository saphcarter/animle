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