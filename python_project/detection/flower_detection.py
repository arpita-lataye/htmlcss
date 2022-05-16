from base64 import encode
from cProfile import label
from ctypes.wintypes import SIZE
from json import encoder
import os
import cv2
import numpy as np

from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.utils import to_categorical 
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Flatten, Activation, Conv2D, MaxPooling2D
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.optimizers import Adam,SGD,Adagrad,Adadelta,RMSprop
import matplotlib.pyplot as plt
folder_dir='download.jpg'
data=[]
lebel=[]
SIZE=128
for folder in os.listdir(folder_dir):
    for file in os.listdir(os.path.join(folder_dir, folder)):
        if file.endswith("jpg"):
            label.append(folder)
            img=cv2.imread(os.path.join(folder_dir,folder_dir,file))
            img_rgb=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
            im=cv2.resize(img_rgb,(SIZE,SIZE))
            data.append(im)
        else:
            continue

        data_arr=np.array(data)
        label_arr=np.array(label)

        encoder=LabelEncoder()
        y=encoder.fit_transform(label_arr)
        y=to_categorical(y,5)
        x=data_arr/255
        x_train, x_test, y_train, y_test= train_test_split(x,y, test_size=0.20, random_state=10)
