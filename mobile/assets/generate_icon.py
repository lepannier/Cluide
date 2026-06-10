from PIL import Image, ImageDraw, ImageFilter, ImageFont

SIZE = 1024
INTER_LIGHT = '/Users/jilrabus/Cluide/mobile/node_modules/@expo-google-fonts/inter/Inter_300Light.ttf'

def make_background(size):
    img = Image.new('RGBA', (size, size), (247, 247, 247, 255))

    blob_green = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    bg = ImageDraw.Draw(blob_green)
    bg.ellipse([int(size*0.41), int(-size*0.12), int(size*0.98), int(size*0.51)], fill=(168, 220, 185, 160))
    blob_green = blob_green.filter(ImageFilter.GaussianBlur(radius=int(size*0.12)))
    img = Image.alpha_composite(img, blob_green)

    blob_purple = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    bp = ImageDraw.Draw(blob_purple)
    bp.ellipse([int(-size*0.08), int(size*0.47), int(size*0.59), int(size*1.10)], fill=(176, 150, 215, 150))
    blob_purple = blob_purple.filter(ImageFilter.GaussianBlur(radius=int(size*0.13)))
    img = Image.alpha_composite(img, blob_purple)

    return img

def draw_text_centered(img, text, font_path, font_size, color=(13, 13, 13, 255)):
    scale = 4
    big = Image.new('RGBA', (img.width * scale, img.height * scale), (0, 0, 0, 0))
    bd = ImageDraw.Draw(big)
    font = ImageFont.truetype(font_path, font_size * scale)
    bbox = bd.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (big.width - tw) // 2 - bbox[0]
    y = (big.height - th) // 2 - bbox[1]
    bd.text((x, y), text, font=font, fill=color)
    big = big.resize((img.width, img.height), Image.LANCZOS)
    return Image.alpha_composite(img, big)

# --- Icon 1024x1024 ---
img = make_background(SIZE)
img = draw_text_centered(img, 'CLUIDE', INTER_LIGHT, 210)
img.convert('RGB').save('/Users/jilrabus/Cluide/mobile/assets/icon.png', 'PNG')

# --- Splash ---
splash = make_background(SIZE)
splash = draw_text_centered(splash, 'CLUIDE', INTER_LIGHT, 140)
splash.convert('RGB').save('/Users/jilrabus/Cluide/mobile/assets/splash.png', 'PNG')

print('Done.')
