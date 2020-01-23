---
layout: page
title: Notebook
permalink: /notebook/
navigation_weight: 1
---

#### Here is a list of projects and articles that I spent (lots of / few) time on. 

<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
    {% assign date_format = site.minima.date_format | default: "%Y" %}
      <li>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <img class="picture" src = "{{post.image}}">
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title}}</a>
        <p> {{ post.summary }} </p>
      </li>
    {% endfor %}
  </ul>
</div>


<ul>
  {% for post in site.posts %}
  {% assign date_format = site.minima.date_format | default: "%Y-%M" %}
    <li>
      {{ post.date | date: date_format }}  |  
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

