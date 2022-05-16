'''import pyttsx3
speaker = pyttsx3.init()
speaker.say('Hey look I can speak')
speaker.runAndWait()

# import PyPDF2
# book = open('XII BST Case Studies-ch-2.pdf', 'rb')
# pdfReader = PyPDF2.PdfFileReader(book)
# pages = pdfReader.numPages
# print(pages)'''


import pyttsx3
import PyPDF2
import os
r,w= os.pipe()
try:
    print(os.ttyname(r))

except OSError as error :
    print(error)
    print("File descriptor is not associated with any terminal device")
book = open('jspdf.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(book)
pages = pdfReader.numPages
print(pages)
speaker = pyttsx3.init()
page = pdfReader.getPage(6)
text = page.extractText()
speaker.say(text)
speaker.runAndWait()
