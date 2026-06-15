---
layout: default
title: Projects
permalink: /projects/
comments: false
---

<ul class="post-list">
  {% for post in site.posts %}
    {% unless post.archived %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span> &mdash;
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endunless %}
  {% endfor %}
</ul>

{% assign archived_posts = site.posts | where: "archived", true %}
{% if archived_posts.size > 0 %}
## Archive

<ul class="post-list">
  {% for post in archived_posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span> &mdash;
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endif %}
