---
layout: page
title: Symbol-Level Precoding for Average SER Minimization in Multiuser MISO Systems
permalink: /publications/2024-02-02-symbol-level-precoding-for-average-ser-minimization-in-multiuser-miso-systems/
nav: false
---

{% bibliography --query @*[key=wang007] %}

## Abstract

This letter investigates symbol-level precoding (SLP) for high-order quadrature amplitude modulation (QAM) aimed at minimizing the average symbol error rate (SER), leveraging both constructive interference (CI) and noise power to gain superiority in full signal-to-noise ratio (SNR) ranges. We first construct the SER expression with respect to the transmitted signal and the rescaling factor, based on which the problem of average SER minimization subject to total transmit power constraint is further formulated. Given the non-convex nature of the objective, solving the above problem becomes challenging. Due to the differences in constraints between the transmit signal and the rescaling factor, we propose the double-space alternating optimization (DSAO) algorithm to optimize the two variables on orthogonal Stiefel manifold and Euclidean spaces, respectively. To facilitate QAM demodulation instead of affording impractical signaling overhead, we further develop a block transmission scheme to keep the rescaling factor constant within a block. Simulation results demonstrate that the proposed SLP scheme exhibits a significant performance advantage over existing state-of-the-art SLP schemes.
