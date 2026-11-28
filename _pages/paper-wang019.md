---
layout: page
title: Dynamic Channel Prediction for Massive MIMO Systems with Temporal Non-Stationarity
permalink: /publications/2025-07-07-dynamic-channel-prediction-for-massive-mimo-systems-with-temporal-non-stationarity/
nav: false
---

{% bibliography --query @*[key=wang019] %}

## Abstract

This paper investigates dynamic channel prediction for massive MIMO under temporal non-stationarity by leveraging dual-timescale and cluster correlations. We propose the sliding frame structure including pilot OFDM symbols to exploit dual-timescale correlations, i.e., intra-frame and interframe correlations, through Doppler-domain modeling and AR processes, respectively. This formulation leads to the spatialfrequency-temporal domain channel model and the correlated angle-delay-Doppler (ADD) domain representation, facilitating the joint exploitation of inter-antenna, inter-subcarrier, and inter-symbol correlations. In AR processes for long-timescale correlation modeling, the pattern-coupled variance is introduced to capture the energy leakage effects resulting from finite ADD domain resolutions. Building upon this structured prior model, we develop the dynamic channel prediction algorithm based on the simplified dynamic approximate message passing framework, with hyperparameters optimized via the expectationmaximization algorithm. Numerical simulations demonstrate the superiority of the proposed algorithm in terms of channel prediction performance.
