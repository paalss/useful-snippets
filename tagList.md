---
layout: layout.html
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
eleventyComputed:
  title: "{{ tag }}"
---

<!-- shows all posts related to that tag -->

<div class="cards">
  {% for post in collections[tag] %}
  <article class="card">
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <p>{{post.content}}</p>
  </article>
  {% endfor %}
</div>
