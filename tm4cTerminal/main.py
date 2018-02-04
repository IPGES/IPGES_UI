import requests
import json

URL = "http://localhost:3000"
URL += "/tm4cInput"

dataStart = 420;
dataStart2 = 520;

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