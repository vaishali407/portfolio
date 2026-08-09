import os
from PIL import Image, ImageDraw

img_dir = r"c:\Users\vaish\Desktop\coding\project\portfolio\public\images\report_extracted"
output_path = r"c:\Users\vaish\Desktop\coding\project\portfolio\public\images\deepfake_detection_preview.png"

# Canvas dimensions
W, H = 1600, 900
bg_color = (8, 12, 20)  # #080C14

canvas = Image.new("RGB", (W, H), bg_color)
draw = ImageDraw.Draw(canvas)

# Draw subtle grid lines
for x in range(0, W, 40):
    draw.line([(x, 0), (x, H)], fill=(255, 255, 255), width=1)
for y in range(0, H, 40):
    draw.line([(0, y), (W, y)], fill=(255, 255, 255), width=1)

# Header metadata container
draw.rectangle((40, 30, 1560, 80), fill=(17, 23, 38), outline=(103, 183, 255), width=1)

# Load extracted report images
arch_img_path = os.path.join(img_dir, "extracted_img_p17_1.jpeg")
graph_img_path = os.path.join(img_dir, "extracted_img_p22_1.jpeg")
matrix_img_path = os.path.join(img_dir, "extracted_img_p25_1.jpeg")
table_img_path = os.path.join(img_dir, "extracted_img_p21_1.jpeg")

def place_card(path, box, title):
    x1, y1, x2, y2 = box
    w = x2 - x1
    h = y2 - y1
    
    # Outer card box
    draw.rectangle((x1, y1, x2, y2), fill=(13, 19, 34), outline=(60, 80, 110), width=1)
    
    # Inner header banner
    draw.rectangle((x1, y1, x2, y1 + 36), fill=(24, 36, 56))
    draw.line([(x1, y1 + 36), (x2, y1 + 36)], fill=(103, 183, 255), width=1)
    
    if os.path.exists(path):
        img = Image.open(path).convert("RGB")
        img_w, img_h = img.size
        
        target_w = w - 24
        target_h = h - 56
        
        # Calculate resize keeping aspect ratio
        ratio = min(target_w / img_w, target_h / img_h)
        new_w = int(img_w * ratio)
        new_h = int(img_h * ratio)
        
        resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Center in card body
        pos_x = x1 + 12 + (target_w - new_w) // 2
        pos_y = y1 + 44 + (target_h - new_h) // 2
        
        canvas.paste(resized, (pos_x, pos_y))

# 1. Main Left Panel: Architecture Diagram (P17_1)
place_card(arch_img_path, (40, 100, 780, 860), "REPORT FIG 3.4 - INCEPTIONV3 + ATTENTION ARCHITECTURE")

# 2. Top Right Panel: Model Comparison Graph (P22_1)
place_card(graph_img_path, (810, 100, 1560, 470), "REPORT FIG 4.2 - ACCURACY COMPARISON GRAPH")

# 3. Bottom Right Left Panel: Confusion Matrix (P25_1)
place_card(matrix_img_path, (810, 490, 1170, 860), "REPORT FIG 4.8 - CONFUSION MATRIX")

# 4. Bottom Right Right Panel: Metrics Table (P21_1)
place_card(table_img_path, (1190, 490, 1560, 860), "REPORT FIG 4.1 - DATASET 1 RESULTS")

canvas.save(output_path, "PNG", quality=95)
print(f"Saved real report composite image to {output_path}")
