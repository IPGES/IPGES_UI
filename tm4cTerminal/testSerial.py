from localRequestExpress import post_to_express

initTime = 200000
initVRMS = 1000

for x in range (0, 10):
	post_to_express(initTime + x, 0, 0, 0, 0, 1000 + x)
