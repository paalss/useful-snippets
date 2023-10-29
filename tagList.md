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
    {% if post.data.ranking != undefined %}
      <sl-rating label="Rating" readonly value="{{post.data.ranking}}"></sl-rating>
    {% endif %}
    <div class="post-tags">
      {% for tag in post.data.tags %}
        <sl-badge variant="neutral">
          <a href="/tags/{{tag}}">
            {{tag}}
          </a>
        </sl-badge>
      {% endfor %}
    </div>
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <p>{{post.content}}</p>
  </article>
  {% endfor %}
</div>
