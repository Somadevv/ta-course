import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env

# Mongo application variables
app = Flask(__name__)
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")
mongo = PyMongo(app)


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/course")
def course():
    titles = mongo.db.modules.find().sort("title", 1)
    return render_template("course.html", titles=titles)


@app.route("/feedback")
def feedback():
    comments = list(mongo.db.comments.find())
    return render_template("feedback.html", comments=comments)


@app.route("/add_comment", methods=["GET", "POST"])
def add_comment():
    if request.method == "POST":
        submit = {
            "comment": request.form.get("comment"),
            "created_by": session["user"]
        }
        mongo.db.comments.insert_one(submit)
        flash("Task Successfully Added")
        return redirect(url_for("feedback"))

    return render_template("add_comment.html")


@app.route("/edit_comment/<comment_id>", methods=["GET", "POST"])
def edit_comment(comment_id):
    if request.method == "POST":
        submit = {
            "comment": request.form.get("comment"),
            "created_by": session["user"]
        }
        mongo.db.comments.update({"_id": ObjectId(comment_id)}, submit)
        flash("Task Successfully Updated")
        return redirect(url_for("feedback"))

    comment = mongo.db.comments.find_one({"_id": ObjectId(comment_id)})
    return render_template("edit_comment.html", comment=comment)


@app.route("/delete_comment/<comment_id>")
def delete_comment(comment_id):
    mongo.db.comments.remove({"_id": ObjectId(comment_id)})
    flash("Task Successfully Deleted")
    return redirect(url_for("feedback"))

@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)
        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
        return redirect(url_for("course"))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Check if username exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # Ensure hashed password matches user input
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(
                    request.form.get("username")))

                return redirect(url_for(
                    "course"))
            else:
                # Invalid password match
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            # Username doesn't exist
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/logout")
def logout():
    # remove user from session cookie
    session.clear()
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=False)
