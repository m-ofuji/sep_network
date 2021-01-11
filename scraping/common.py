import json
import os
import requests

import io,sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def get_html(url):
    ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"

    headers = {
        "User-Agent": ua
    }

    try:
        res = requests.get(url, headers=headers)
        if (res.status_code == 200):
            return res
        else:
            raise Exception("request failed with " + str(res.status_code) + ": " + url)
    except Exception as ex:
        raise ex

def create_dir(dir):
    if not os.path.exists(dir):
        os.makedirs(dir)

def get_file_path(dir, file_name):
    if not os.path.exists(dir): return False

    dirs = dir.split("/")
    dirs.append(file_name)
    path = os.path.join(*dirs)

    return path

def write_json(content, dir, file_name):
    path = get_file_path(dir, file_name)
    if not path: return

    with open(path, "w") as f:
        json.dump(content, f, indent=4)

def read_json(dir, file_name):
    path = get_file_path(dir, file_name)
    if not path: return False

    with open(path, "r") as f:
        return json.load(f)