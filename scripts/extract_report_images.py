import fitz  # PyMuPDF
import os
from PIL import Image

pdf_path = r"C:\Users\vaish\.gemini\antigravity-ide\brain\664f6179-5fc7-4ea6-a5a2-f9caee87cdec\media__1786268312525.pdf"
output_dir = r"c:\Users\vaish\Desktop\coding\project\portfolio\public\images\report_extracted"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages in PDF: {len(doc)}")

# Render key pages at 2x resolution (144 dpi or matrix 2, 2)
# Pages: 1 (cover), 14 (CNN arch), 17 (InceptionV3+Attention arch), 21 (Result table 1), 22 (Accuracy graph), 25 (Confusion matrix & graphs), 27 (Inception graphs), 34 (Model comparison)
key_pages = [1, 14, 17, 21, 22, 25, 27, 34]

for p_num in key_pages:
    page = doc.load_page(p_num - 1)
    pix = page.get_pixmap(matrix=fitz.Matrix(3.0, 3.0)) # 3x high DPI
    out_file = os.path.join(output_dir, f"page_{p_num}.png")
    pix.save(out_file)
    print(f"Rendered Page {p_num} -> {out_file}")

# Extract embedded images from all pages
img_count = 0
for i, page in enumerate(doc):
    image_list = page.get_images(full=True)
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_filename = f"extracted_img_p{i+1}_{img_index+1}.{image_ext}"
        image_path = os.path.join(output_dir, image_filename)
        with open(image_path, "wb") as f:
            f.write(image_bytes)
        img_count += 1

print(f"Extracted {img_count} raw images from PDF.")
