---
title: "urrova site > blog"
layout: 'layouts/blog_feed_es.html'
pagination:
  data: collections.blog_es
  size: 5
permalink: 'es/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: '<-- Prev'
paginationNextText: 'Next -->'
paginationAnchor: '#post-list'
---

# Blog
Dice que es un blog pero es mas un changelog del sitio. {.center}

Podes subscribirte al blog usando <i class="fa-solid fa-rss SVGicon"></i> [mi canal RSS](/rss.xml) (si sos de los frikis que usan RSS lol). {.center}