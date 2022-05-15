from datetime import datetime
from xmlrpc.client import Boolean
from app import db
from sqlalchemy import VARCHAR


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Animals(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    Name = db.Column(VARCHAR(50))
    Classification = db.Column(VARCHAR(50))
    Legs = db.Column(Boolean)
    Tail = db.Column(Boolean)
    Wings = db.Column(Boolean)
    Flippers = db.Column(Boolean)
    Size = db.Column(VARCHAR(2))
    Climate = db.Column(VARCHAR(50))
    Endangered = db.Column(VARCHAR(50))

    def __repr__(self):
        return 'Animal {}>'.format(self.name)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Post {}>'.format(self.body)
