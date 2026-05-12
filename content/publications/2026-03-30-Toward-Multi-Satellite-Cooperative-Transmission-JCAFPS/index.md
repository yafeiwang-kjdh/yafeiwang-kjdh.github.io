---
title: "Toward Multi-Satellite Cooperative Transmission: A Joint Framework for CSI Acquisition, Feedback, and Phase Synchronization"
authors:
  - Yiming Zhu
  - admin
  - Carla Amatetti
  - Alessandro Vanelli-Coralli
  - Wenjin Wang
  - Rui Ding
  - Symeon Chatzinotas
  - Björn Ottersten
date: "2026-03-30T09:03:58Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-03-30T09:03:58Z"

publication_types: ["Preprint Paper"]

publication: "*arXiv preprint arXiv:2603.28195*"
publication_short: "*arXiv*"

abstract: >-
  The stringent link budget, caused by long propagation distances and payload constraints, poses a fundamental bottleneck for single-satellite transmission. Although LEO mega-constellations make multi-satellite cooperative transmission (MSCT), such as distributed precoding (DP), increasingly feasible, its cooperative gains critically rely on stringent time-frequency-phase synchronization (TFP-Sync), which is difficult to maintain under rapid channel variation and feedback latency. To address this issue, this paper proposes a joint CSI acquisition, feedback, and phase-level synchronization (JCAFPS) framework for MSCT. Specifically, to enable reliable, overhead-efficient CSI acquisition, we design a beam-domain adjustable phase-shift tracking reference signal (TRS) transmission scheme, along with criteria for the TRS and CSI-feedback periods. Then, exploiting deterministic orbital motion and dominant LoS propagation, we establish a polynomial model for the temporal evolution of delay and Doppler shift, and derive an OFDM-based multi-satellite signal model under non-ideal synchronization. The analysis reveals that, unlike the single-satellite case, the composite multi-satellite channel exhibits nonlinear time-frequency-varying phase behavior, necessitating symbol- and subcarrier-wise phase precompensation for coherent transmission. Based on these results, we develop a practical closed-loop realization integrating single-TRS-based channel parameter estimation, multi-TRS-based channel prediction, predictive CSI feedback, and user-specific TFP precompensation. Numerical results demonstrate that the proposed framework achieves accurate CSI acquisition and precise TFP-Sync, enabling DP-based dual-satellite cooperative transmission to approach the theoretical 6 dB power gain over single-satellite transmission, while remaining robust under extended prediction durations and enlarged TRS periods.

featured: false

hugoblox:
  ids:
    doi: 10.48550/arXiv.2603.28195

links:
  - type: pdf
    url: https://arxiv.org/pdf/2603.28195

url_pdf: ""
url_code: ""
url_dataset: ""
url_poster: ""
url_project: ""
url_slides: ""
url_source: ""
url_video: ""

image:
  caption: ""
  focal_point: ""
  preview_only: false

projects: []
slides: ""
---
