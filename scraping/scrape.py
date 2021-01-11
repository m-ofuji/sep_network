from bs4 import BeautifulSoup
import common
import constants
import datetime
import logger
import requests
import time
import traceback

BASE_URL = constants.BASE_URL
OUTPUT_DIR = constants.OUTPUT_DIR
ENTRIES_FILE_NAME = constants.ENTRIES_FILE_NAME


def get_entry_urls():
    contents_url = BASE_URL + "contents.html"

    res = requests.get(contents_url)
    soup = BeautifulSoup(res.content, "html.parser")

    urls = []

    for link in soup.select("h2+ul>li>a"):
        seg = link.get("href")
        if ("#" in seg): continue
        urls.append(seg)

    return urls

def get_entry(index, seg):
    entry_url = BASE_URL + seg
    try:
        dt_now = datetime.datetime.now()
        now = dt_now.strftime("%Y/%m/%d %H:%M:%S ")
        print(now + ":" + str(index))

        res = common.get_html(entry_url)
        soup = BeautifulSoup(res.content, "html.parser")
        title = soup.find("h1").text
        links = list(map(lambda x: x.get("href").replace("../", ""), soup.select("div#related-entries p a")))
        return {
            "id": index,
            "title": title,
            "entry_url": seg.replace("entries/", ""),
            "links": links,
        }
    except Exception:
        logger.write_error(traceback.format_exc())
        return False

def crawl_entries(segs):
    index = 1
    for seg in segs:
        time.sleep(10)
        entry = get_entry(index, seg)
        if (not entry): yield False
        index += 1
        yield entry

def crawl():
    segs = get_entry_urls()

    logger.write_log("start crawling")

    try:
        common.create_dir(OUTPUT_DIR)
        entries = []
        for entry in crawl_entries(segs):
            if (not entry):
                logger.write_log("error occurred")
                return
            entries.append(entry)
            common.write_json(entries, OUTPUT_DIR, ENTRIES_FILE_NAME)
    except Exception:
        logger.write_log("error occurred")
        logger.write_error(traceback.format_exc())
    finally:
        logger.write_log("end crawling")

crawl()