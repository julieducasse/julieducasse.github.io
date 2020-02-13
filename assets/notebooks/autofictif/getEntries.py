import numpy as np
import requests
from bs4 import BeautifulSoup

#r = requests.get("http://autofictif.blogspot.com/")
r = requests.get("http://autofictif.blogspot.com/search?updated-max=2020-01-30T00:02:00%2B01:00&max-results=200")
soup = BeautifulSoup(r.content)

entries_length = []
for div_entry in soup.find_all('div', class_='post-body entry-content'):
    length_day = 0
    for span in div_entry.find_all('span'):
        if (len(span.select('span')) != 0):
            length_day += len((span.select('span')[0].text).split())
    print("==========", length_day, "====")
    entries_length.append(length_day)

print("mean number of characters per day", np.mean(entries_length))