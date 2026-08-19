import urllib.request
import re
import os

urls = [
    ('orbbec_gemini_2', 'https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html'),
    ('orbbec_gemini_336', 'https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html'),
    ('realsense_d435i', 'https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html'),
    ('realsense_d405', 'https://www.seeedstudio.com/RealSense-D405-3D-Camera-p-6758.html'),
    ('usb_camera_s231', 'https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html'),
    ('power_adapter_dm', 'https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html'),
    ('dm4340p_actuator', 'https://www.seeedstudio.com/DM4340P-Actuator-p-6663.html'),
    ('damiao_4310_motor', 'https://www.seeedstudio.com/Damiao-4310-Actuator-Motor-p-6823.html')
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

out_dir = r'F:\projects\reBot\image'

for key, url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html)
        if not matches:
            matches = re.findall(r'content=["\']([^"\']+)["\']\s+property=["\']og:image["\']', html)
        if matches:
            img_url = matches[0]
            print(f'{key}: {img_url}')
            img_req = urllib.request.Request(img_url, headers=headers)
            img_data = urllib.request.urlopen(img_req).read()
            filepath = os.path.join(out_dir, f'{key}.jpg')
            with open(filepath, 'wb') as f:
                f.write(img_data)
            print(f'  [SUCCESS] Saved {len(img_data)} bytes to {filepath}')
        else:
            print(f'{key}: og:image not found')
    except Exception as e:
        print(f'{key} error: {e}')
