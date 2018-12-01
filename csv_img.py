import os

import csv
import pandas
import random


root ='./img'

filesroot = []

for path, subdirs, files in os.walk(root):
    for name in files:
        file = os.path.join(path, name)
        file = 'https://wtfutures.com' + file.replace('./img', '/img')
        file = file.replace('\\', '/')
        if file.startswith('https://wtfutures.com/img/render_pix_'):
            filesroot.append(file)
            print(file)

random.shuffle(filesroot)
df = pandas.DataFrame(data={"image_url": filesroot})
df.to_csv("./input_2.csv", sep=',',index=False)
