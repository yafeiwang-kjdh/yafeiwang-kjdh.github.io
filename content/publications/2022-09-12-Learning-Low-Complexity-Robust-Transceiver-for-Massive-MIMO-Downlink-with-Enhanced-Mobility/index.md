---
title: "Learning Low-Complexity Robust Transceiver for Massive MIMO Downlink with Enhanced Mobility"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Guanxing Lu
  - Yundi Li
  - Huapeng Zhou
  - admin
  - Wenjin Wang

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2022-09-12

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Conference Paper']

# Publication name and optional abbreviated publication name.
publication: "*2022 IEEE 33rd Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)*"
publication_short: "*2022 IEEE 33rd Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)*"

abstract: |-
 This paper studies low-complexity robust beamforming in mobile massive multiple-input multiple-output (MIMO) wireless communication systems, which introduces a robustness factor and deep learning (DL)-based framework to mitigate the impact of imperfect channel state information (CSI). By incorporating the estimation uncertainty, we aim to design transceivers to minimize outage probability subject to a total transmit power constraint. However, due to the probabilistic constraints, the optimization problem is difficult to solve. Therefore, we introduce a robustness factor to the quality of service (QoS) constraints by maximizing a zero-outage region, based on an extension of the offset maximization method. Then, we convert the problem into a convex problem and get a quasi-closed-form solution. Besides, iterating the fixed point equation of the Lagrange multipliers in the inequality optimization introduces enormous computational complexity. To this end, we present a novel DL-based algorithm to predict the multipliers directly from imperfect CSI, which includes a column convolutional layer elaborately designed for channel input. Comprehensive experimental comparisons demonstrate the proposed robust transceiver can improve the outage probability significantly over conventional baselines, and the DL-based algorithm can further reduce the running time.

# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
#  - LWMMSE
#  - Symbol-Level Precoding
#  - Constructive Interference Region
#  - Low Complexity

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
doi: https://doi.org/10.1109/PIMRC54779.2022.9977599

# Custom links
links:
  - type: pdf
    url: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9977599
  # - type: code
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: dataset
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: video
  #   url: https://youtube.com

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<!-- > [!NOTE]
> Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the _Slides_ button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
