from flask import Flask
from config import Config
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'

#Database configuration - currently set to an SQLite relative path
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
migrate = Migrate(app,db)

# not super extendable so instead use:
app.config.from_object(Config)
bootstrap = Bootstrap(app)

login = LoginManager(app)
login.login_view = 'login'

from app import routes, models