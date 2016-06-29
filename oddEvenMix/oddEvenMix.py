def mixed(x,y):
	mix=0
	odd=0
	even=0
	arr=[]
	tempArr=[]
	for i in range(x,y+1):
		numToStr=str(i)
		for j in numToStr:
			if(int(j)%2==0):
				tempArr.append("even")
			else:
				tempArr.append("odd")
		arr.append(tempArr)
		tempArr=[]
	for k in arr:
		if(k[0]=="odd" and ("even" in k)):
			mix+=1
		elif((k[0]=="even" and ("odd" in k))):
			mix+=1
		elif(k[0]=="even"):
			even+=1
		else:
			odd+=1
	return 'mix:',mix,"even:",even,"odd:",odd
		


print mixed(19,23)  

