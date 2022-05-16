
# m=[12, 45, 23, 67, 78, 90, 45, 32, 100, 76, 38, 62, 73, 29, 83]
# n=[]
# k=[]
# count=0
# for i in range(len(m)):
#     if count==5:
#         n.append(k)
#         k=[]
#         count=1
#     else:
#         count+=1
#     k.append(m[i])
# n.append(k)
# print(n)


# x=[['a', 'b'], ['b', 'c', 'd'], ['e', 'f']]
# y=[['p', 'q'], ['p', 's', 't'], ['u', 'v', 'w']]
# v=[]
# for i in range(len(x)):
#     v.append(x[i]+y[i])
# print(v)

i=1
while i<7:
    j=1
    while j<i:
        if (j%2==0):
            print('*',end='')
        else:
            print(j,end='')
        j+=1
    print()
    i+=1