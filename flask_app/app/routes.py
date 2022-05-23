from random import random
from flask import render_template, flash, redirect, url_for, request, jsonify
from app import app, db
from app.forms import LoginForm, RegistrationForm, BaseForm
from app.models import Animals, Users
from werkzeug.urls import url_parse
from flask_login import current_user, login_user, logout_user
import os, math, random, datetime, requests

#Routes to the gamepage 
@app.route('/')
@app.route('/gamepage')
def gamepage():
    return render_template('gamepage.html', title='Home')

#This attempts to add the answer to the animale game from the database
@app.route('/answers')
def names(): 
    animal_names = Animals.query.with_entities(Animals.Name)
    return jsonify(animal_names)
    
#implemented for the user to login to there account 
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

#implemented stored user registrations details to database
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

#logs the user out of their account
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('gamepage'))

#allows the user to see their game stats
@app.route('/stats')
def stats(): 
    return render_template('stats.html', title='stats')

#routes the user to the intructions page 
@app.route('/instructions')
def instructions(): 
    return render_template('instructions.html', title='instructions')


