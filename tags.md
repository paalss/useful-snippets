---
layout: layout.html
title: Tags
---
<!-- show all available tags (excluding all and posts) as buttons -->

{% for tag in collections.tagList %}
<span>
    <a href="/tags/{{ tag }}" class="tag"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-6 mb-4">
        {{ tag }}
    </button>
    </a>
</span>
{% endfor %}
