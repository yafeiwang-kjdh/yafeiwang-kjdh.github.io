---
title: "Distributed Beamforming for Multiple LEO Satellites With Imperfect Delay and Doppler Compensations: Modeling and Rate Analysis"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Shiyu Wu
  - admin
  - Gangle Sun
  - Wenjin Wang
  - Jiaheng Wang
  - Björn Ottersten

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2025-05-09

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Vehicular Technology (TVT)*"
publication_short: "*IEEE Transactions on Vehicular Technology (TVT)*"

abstract: |-
  To improve the transmission performance of low Earth orbit (LEO) satellites limited by practical constraints of transmit power, antenna array size, and antenna gain in single satellites, multiple LEO satellites can be leveraged to cooperatively serve terrestrial user terminals (UTs). This paper investigates cooperative downlink (DL) transmission from multiple LEO satellites by using distributed beamforming, considering the inevitable delay and Doppler compensation errors that impact coherent processing. Firstly, we establish the DL transmission signal model for multiple LEO satellites with delay and Doppler compensation errors. On this basis, we design the transmitters and receivers to maximize the average signal-to-leakage-plus-noise ratio. Then, we analyze the DL transmission performance via deriving lower bounds and closed-form expressions for both the user rate and the average rate gain of cooperative transmission compared to single LEO satellite transmission. We prove that as the number of receiving antennas at the UT increases, the impact of imperfect compensation on the user rate decreases, and the average rate gain improves. In addition, we prove that the UT can achieve the optimal average rate gain when its array response vectors corresponding to different LEO satellites are orthogonal. Simulations are performed and compared to the theoretical analysis, demonstrating the performance gains brought by distributed beamforming and validating our analysis.

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
doi: "https://doi.org/10.1109/TVT.2025.3564047"

# Custom links
links:
  - type: pdf
    url: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10918425
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
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

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
