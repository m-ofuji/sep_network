import datetime
import os

LOG_DIR = "./log/"
LOG_FILE = "log.txt"
ERROR_FILE = "error.txt"

def write(file_name, log):
    if not os.path.exists(LOG_DIR):
        os.makedirs(LOG_DIR)

    file_path = LOG_DIR + file_name

    if not os.path.isfile(file_path):
        with open(file_path, "w") as f:
            f.write("log" if file_name == LOG_FILE else "error log")

    with open(file_path, "a") as f:
        dt_now = datetime.datetime.now()
        now = dt_now.strftime("%Y/%m/%d %H:%M:%S ")
        f.write("\n" + now + log.rstrip('\n'))

def write_log(log):
    write(LOG_FILE, log)

def write_error(log):
    write(ERROR_FILE, log)