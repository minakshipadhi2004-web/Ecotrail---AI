from flask import Flask, render_template, request, jsonify
import pickle

app = Flask(__name__)

# Load ML model
model = pickle.load(open("model/vehicle_model.pkl", "rb"))

# -------------------- PAGES --------------------

@app.route('/')
def home():
    return render_template("index.html")
@app.route('/dashboard')
def dashboard():
    return render_template("Dashboard.html")

@app.route('/transport')
def transport_page():
    return render_template("transport.html")

@app.route('/food-page')
def food_page():
    return render_template("food.html")

@app.route('/electricity-page')
def electricity_page():
    return render_template("electricity.html")

@app.route('/history-page')
def history_page():
    return render_template("history.html")


# -------------------- API (TRANSPORT AI) --------------------

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    engine = float(data['engineSize'])
    cylinders = int(data['cylinders'])
    fuel = float(data['fuelComb'])
    print("DATA:",engine,cylinders,fuel)

    #prediction = model.predict([[engine, cylinders, fuel]])

    #return jsonify({"co2": round(prediction[0])})
    co2 = engine*cylinders*fuel
    return jsonify({"co2": round(co2,2)})


# -------------------- FOOD (MANUAL) --------------------

@app.route('/food-page')
def food_page_new():
    return render_template("food.html")

# @app.route('/food',methods=['GET','POST'])
# def food():
#     data = request.json

#     quantity = float(data['quantity'])
#     factor = float(data['factor'])   # veg / non-veg

#     co2 = quantity * factor

#     return jsonify({"co2": round(co2, 2)})


# -------------------- ELECTRICITY --------------------

@app.route('/electricity', methods=['GET','POST'])
def electricity():
    if request.method == 'GET':
        return render_template("electricity.html")
    data = request.json

    units = float(data['units'])

    co2 = units * 0.82   # emission factor

    return jsonify({"co2": round(co2, 2)})

@app.route('/history')
def history():
    return render_template("history.html")

@app.route('/login')
def login():
    return render_template("index.html")

# @app.route('/signup')
# def signup():
#     return render_template("signup.html")
# @app.route('/logout')
# def logout():
#     session.clear()
#     return redirect(url_for('login'))
# -------------------- RUN --------------------

if __name__ == "__main__":
    app.run(debug=True)