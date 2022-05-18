from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import LoginForm
from app.models import Animals, Users
from werkzeug.urls import url_parse
from flask_login import current_user, login_user, logout_user

@app.route('/')
@app.route('/gamepage')
def gamepage():
    animals = Animals()
    return render_template('gamepage.html', title='Home')
    

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
        return redirect(url_for('gamepage'))
    return render_template('login.html', title='Sign In', form=form)

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


