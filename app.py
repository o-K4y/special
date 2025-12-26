from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "loveyoumorethananything"

PASSWORD = "Star"


@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        if request.form.get("password") == PASSWORD:
            session["allowed"] = True
            return redirect(url_for("home"))
    return render_template("login.html")


@app.route("/home")
def home():
    if not session.get("allowed"):
        return redirect(url_for("login"))
    return render_template("index.html")


@app.route("/the-place-you-never-asked-for")
def secret():
    if not session.get("allowed"):
        return redirect(url_for("login"))
    return render_template("secret.html")


if __name__ == "__main__":
    app.run(debug=True)
