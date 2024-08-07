import io
import base64
from PIL import Image


def resize_image(image):
    resized_image = image.resize((32, 32))
    return resized_image


def convert_image_to_base64(image):
    if image.mode in ("RGBA", "P"):
        image = image.convert("RGB")
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    image_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')
    return f"data:image/jpg;base64,{image_base64}"


def convert_numpy_arr_image_to_base64(np_image):
    image = Image.fromarray(np_image)
    return convert_image_to_base64(image)


def convert_image_to_jpeg(image):
    image = Image.open(image)

    # Convert the image to RGB mode (if needed)
    if image.mode != 'RGB':
        image = image.convert('RGB')

    return image