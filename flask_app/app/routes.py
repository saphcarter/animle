from gc import get_debug
import json
from random import random
from flask import render_template, flash, redirect, url_for, request, jsonify, Response
from app import app, db
from app.forms import LoginForm, RegistrationForm
from app.models import Animals, Users
from werkzeug.urls import url_parse
from flask_login import current_user, login_user, logout_user
import os, math, random, datetime, requests
from flask_sqlalchemy import SQLAlchemy

dateTime = datetime.datetime.now()
date = int(dateTime.strftime("%Y%m%d"))
random.seed(date)
targetId = math.ceil(random.random()*38)

@app.route('/')
@app.route('/gamepage', methods=['GET', 'POST'])
def gamepage():
    hints = []
    # names = Animals.query.all()
    form = LoginForm()
    if form.validate_on_submit():
        guess = Animals.query.filter_by(name=form.guessWord.data).first()
        target = Animals.query.filter_by(id=targetId).first()
        if guess: 
            if guess == target:
                flash('congrats')
            else:
                flash('wrong guess')
                hints.append(Animals.query.filter_by(id=targetId).first())
            # get gessnum hint
        else:
            flash('guess not in database')
    return render_template('gamepage.html', title='Home', form=form, hints=hints)

@app.route('/answers')
def names(): 
    animal_names = Animals.query.with_entities(Animals.Name, Animals.id).all()
    print("these are animal names", animal_names)
    data = []
    for animal in animal_names:
        data.append(dict(animal))
        
    return jsonify(data)
    

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('gamepage'))
    form = LoginForm()
    if form.validate_on_submit():
        user = Users.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('gamepage')
        return redirect(next_page)
    return render_template('login.html', title='Sign In', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('gamepage'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = Users(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('gamepage'))

@app.route('/stats')
def stats(): 
    return render_template('stats.html', title='stats')

@app.route('/instructions')
def instructions(): 
    return render_template('instructions.html', title='instructions')


