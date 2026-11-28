---
layout: page
title: Joint beam alignment and Doppler estimation for fast time-varying wideband
  mmWave channels
permalink: /publications/2024-03-20-joint-beam-alignment-and-doppler-estimation-for-fast-time-varying-wideband-mmwave-channels/
nav: false
---

{% bibliography --query @*[key=wang008] %}

## Abstract

This paper investigates the joint beam alignment and Doppler estimation (BADE) for fast time-varying wideband millimeter-wave channels, which is essential for subsequent data transmission. In such scenarios, the non-negligible Doppler frequencies significantly impact the beam alignment performance and reference signal overhead, calling for accurate time variation modeling and efficient transceiver design. Toward this end, we leverage the angle, Doppler frequency, and delay sparsity, thus formulating the joint BADE problem as a sparse signal recovery problem in the angle-Doppler-delay domain. The feasibility of the formulated problem strongly depends on the transmitter codebook and the receiver algorithm, which motivates our design. For the transmitter codebook, we characterize the design criterion aiming at maximal identifiable paths, which facilitates precise path parameter estimations and is not satisfied by existing deterministic codebooks. Following this, we provide a new deterministic codebook generation algorithm to meet the necessary conditions of the proposed criterion. For the receiver algorithm, we propose the greedy-based multi-path parameter extraction algorithm. In the proposed algorithm, the hierarchical refinement dictionaries with extended refinement range are employed, balancing the BADE performance and computational complexity. The numerical simulations demonstrate the superiority of the proposed transceiver over benchmarks on the joint BADE problem.
