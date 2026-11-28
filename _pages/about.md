---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate · Southeast University · Wireless Communications
profile:
  align: right
  image: prof_pic.png
  image_circular: false
selected_papers: false
social: true
announcements:
  enabled: true
  limit: 3
latest_posts:
  enabled: false
---

Yafei Wang is a Ph.D. candidate in Information and Communication Engineering at the National Mobile Communications Research Laboratory, Southeast University, supervised by Prof. Wenjin Wang. He received his B.E. in Communication Engineering from Tianjin University in 2021 and his M.E. from Southeast University in 2023.

From December 2024 to December 2025, he was a visiting Ph.D. researcher at the Interdisciplinary Centre for Security, Reliability and Trust (SnT), University of Luxembourg, supervised by Prof. Björn Ottersten.

His research focuses on **AI-native wireless communications and cooperative LEO satellite MIMO networks**. He develops structure-aware learning and optimization methods for precoding, CSI acquisition, feedback, and prediction, with particular interests in tensor equivariance, statistical-CSI-based distributed transmission, and robust transceiver design.

His work has appeared in IEEE JSAC, TWC, TCOM, and IEEE Wireless Communications. He is a lead organizer of a special session at IEEE SPAWC 2026 and reviews for TWC, TCOM, TMC, IEEE Wireless Communications, TVT, and WCL.

Contact: [wangyf@seu.edu.cn](mailto:wangyf@seu.edu.cn) · [LinkedIn](https://www.linkedin.com/in/yafei-wang-1563013a3/)

<div style="clear:both"></div>
{% if page.announcements.enabled %}
<h2><a href="{{ "/news/" | relative_url }}" style="color:inherit">News</a></h2>
{% include news.liquid limit=true %}
{% endif %}

{% include research_metrics.liquid %}

<h2>Selected Publications</h2>
<div class="publications">{% bibliography --query @*[selected=true] %}</div>
<h2 id="papers">Publications</h2>
<p><a href="/publications/">All 48 publications →</a> · <a href="/first-author/">First-Author Publications →</a></p>

{% include collaborators.liquid %}
