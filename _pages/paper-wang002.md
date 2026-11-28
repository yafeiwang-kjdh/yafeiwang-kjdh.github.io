---
layout: page
title: Learning Low-Complexity Robust Transceiver for Massive MIMO Downlink with Enhanced
  Mobility
permalink: /publications/2022-09-12-learning-low-complexity-robust-transceiver-for-massive-mimo-downlink-with-enhanced-mobility/
nav: false
---

{% bibliography --query @*[key=wang002] %}

## Abstract

This paper studies low-complexity robust beamforming in mobile massive multiple-input multiple-output (MIMO) wireless communication systems, which introduces a robustness factor and deep learning (DL)-based framework to mitigate the impact of imperfect channel state information (CSI). By incorporating the estimation uncertainty, we aim to design transceivers to minimize outage probability subject to a total transmit power constraint. However, due to the probabilistic constraints, the optimization problem is difficult to solve. Therefore, we introduce a robustness factor to the quality of service (QoS) constraints by maximizing a zero-outage region, based on an extension of the offset maximization method. Then, we convert the problem into a convex problem and get a quasi-closed-form solution. Besides, iterating the fixed point equation of the Lagrange multipliers in the inequality optimization introduces enormous computational complexity. To this end, we present a novel DL-based algorithm to predict the multipliers directly from imperfect CSI, which includes a column convolutional layer elaborately designed for channel input. Comprehensive experimental comparisons demonstrate the proposed robust transceiver can improve the outage probability significantly over conventional baselines, and the DL-based algorithm can further reduce the running time.
