#!usr/bin/env python
# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup

def get_movie(soup, name):
	title_list = soup.find_all(class_='title')
	for title in title_list:
		if title.string[1] != '/':
			name.append(title.string)
	return name

def get_number_score(soup, number, score):
	number_list = soup.find_all('em')
	score_list = soup.find_all(class_='rating_num')
	for numbers in number_list:
		number.append(numbers)
	for scores in score_list:
		score.append(scores)
	return number, score

name = []
number = []
score = []

for i in range(10):
	url = 'https://movie.douban.com/top250?start=%s&filter=' %(i * 25)
	req = requests.get(url)
	soup = BeautifulSoup(req.text, 'html.parser')
	name = get_movie(soup, name)
	(number, score) = get_number_score(soup, number, score)

for j in range(len(name)):
	title_str = '%s %s %s分' %(number[j].text, name[j], score[j].text)
	print(title_str)


	

