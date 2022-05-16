from email.mime import image
import cv2
from cv2 import invert
from cv2 import blur
from numpy import imag

image=cv2.imread("suga.png")

grey_img=cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
invert=cv2.bitwise_not(grey_img)
blur=cv2.GaussianBlur(invert,(21,21),0)
invertedblur=cv2.bitwise_not(blur)
sketch=cv2.divide(grey_img, invertedblur, scale=256.0)
cv2.imwrite("sketch.png",sketch)