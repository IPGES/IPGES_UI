import requests
import json

URL = "https://damp-gorge-19491.herokuapp.com"
URL += "/tm4cInput"

dataStart = 350;
dataStart2 = 870;

for i in range (0,10):
	payload = { "time": dataStart + i,
				"pv" : dataStart2 + i,
				"inverter": dataStart2 + i,
				"wind": dataStart2 + i,
				"grid": dataStart2 + i,
				"load": dataStart2 + i}
	headers = {'Content-Type': 'application/json'}
	response = requests.post(url = URL, headers = headers, data = json.dumps(payload));

results = response.text
print("Requested%s", results);
