def mixed(x,y):
	mix=0
	odd=0
	even=0
	arr=[]
	tempArr=[]
	length=0
	strr=""
	for z in range(x,y+1):
		length=len(str(z))
		strr=str(z)
		for i in strr:
			if(int(i)%2==0):
				tempArr.append("even")
			else:
				tempArr.append("odd")
		arr.append(tempArr)
		tempArr=[]
		strr=""

	for n in arr:
		if(n[0]=="odd" and ("even" in n)):
			mix+=1
		elif((n[0]=="even" and ("odd" in n))):
			mix+=1
		elif(n[0]=="even"):
			even+=1
		else:
			odd+=1
	return 'mix:',mix,"even:",even,"odd:",odd
		


print mixed(19,23)  

