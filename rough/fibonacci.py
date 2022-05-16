# def recur_fibo(n):
#     if n<= 1:
#         return n
#     else:
#         return(recur_fibo(n-1)+recur_fibo(n-2))
# nterms=10

# if nterms<=0:
#     print("please enter a positive integer")
# else:
#     print("fibonacci sequence:")
#     for i in range(nterms):
#         print(recur_fibo(i))


i=1
while i<=4:
    j=1
    while j<=i:
        if j==2:
            pass
        else:
            print(j,"*",end="")
        # print("*",end="")
        j+=1
    i+=1
    print()    