---
layout: page
title: Multi-Satellite Multi-Stream Beamspace Massive MIMO Transmission
permalink: /publications/2025-12-26-multi-satellite-multi-stream-beamspace-massive-mimo-transmission/
nav: false
---

{% bibliography --query @*[key=wang032] %}

## Abstract

This paper studies multi-satellite multi-stream (MSMS) beamspace transmission, where multiple satellites cooperate to form a distributed multiple-input multiple-output (MIMO) system and jointly deliver multiple data streams to multi-antenna user terminals (UTs), and beamspace transmission combines earth-moving beamforming with beam-domain precoding. For the first time, we formulate the signal model for MSMS beamspace MIMO transmission. Under synchronization errors, multi-antenna UTs enable the distributed MIMO channel to exhibit higher rank, supporting multiple data streams. Beamspace MIMO retains conventional codebook based beamforming while providing the performance gains of precoding. Based on the signal model, we propose statistical channel state information (sCSI)-based optimization of satellite clustering, beam selection, and transmit precoding, using a sum-rate upper-bound approximation. With given satellite clustering and beam selection, we cast precoder design as an equivalent covariance decomposition-based weighted minimum mean square error (CDWMMSE) problem. To obtain tractable algorithms, we develop a closed-form covariance decomposition required by CDWMMSE and derive an iterative MSMS beam-domain precoder under sCSI. Following this, we further propose several heuristic closed-form precoders to avoid iterative cost. For satellite clustering, we enhance a competition-based algorithm by introducing a mechanism to regulate the number of satellites serving certain UT. Furthermore, we design a two-stage low-complexity beam selection algorithm focused on enhancing the effective channel power. Simulations under practical configurations validate the proposed methods across the number of data streams, receive antennas, serving satellites, and active beams, and show that beamspace transmission approaches conventional MIMO performance at lower complexity.
