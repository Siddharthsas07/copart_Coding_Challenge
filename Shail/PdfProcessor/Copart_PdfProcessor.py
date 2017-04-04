import PyPDF2
import img2pdf

# pdf_bytes = img2pdf.convert('C:\\Users\\Vimal\\Desktop\\title_arkansas.jpg', dpi=150)

pdfFile = open('C:\\Users\\Vimal\\Desktop\\a.pdf','rb')
pdfReader = PyPDF2.PdfFileReader(pdfFile)

pageObj = pdfReader.getPage(0)
abc =(pageObj.extractText())
print (abc)
# if(abc.)