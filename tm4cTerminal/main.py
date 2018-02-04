import requests
import json

URL = "http://localhost:3000"
URL += "/tm4cInput"

dataStart = 420;
dataStart2 = 520;


payload = { "time": dataStart,
			"pv" : dataStart2,
			"inverter": dataStart2,
			"wind": dataStart2,
			"grid": dataStart2,
			"load": dataStart2 }

headers = {'Content-Type': 'application/json'}

response = requests.post(url = URL, headers = headers, data = json.dumps(payload));

results = response.text
print("Requested%s", results);