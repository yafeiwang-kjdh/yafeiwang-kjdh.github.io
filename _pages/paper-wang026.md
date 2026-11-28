---
layout: page
title: Statistical CSI-Based Beamspace Transmission for Massive MIMO LEO Satellite
  Communications
permalink: /publications/2025-11-28-statistical-csi-based-beamspace-transmission-for-massive-mimo-leo-satellite-communications---%E5%89%AF%E6%9C%AC/
nav: false
---

{% bibliography --query @*[key=wang026] %}

## Abstract

In multibeam low-Earth-orbit (LEO) satellite systems, precoding has emerged as a key technology for mitigating co-channel interference (CCI) and for improving spectral efficiency (SE). However, its practical implementation is challenged by the difficulty of acquiring reliable instantaneous channel state information (iCSI) and by the high computational complexity induced by large-scale antenna arrays, making it incompatible with fixed codebook-based beamforming schemes commonly adopted in operational systems. In this analysis, we propose a beamspace transmission framework leveraging statistical CSI (sCSI) and achieves reduced computational complexity compared with antenna-domain precoding designs. Specifically, we first propose a low-complexity beam selection algorithm that selects a small subset of beams for each user terminal (UT) from a fixed beamforming codebook, using only the UTs’ two-dimensional (2D) angular information. To suppress CCI among beams, we then derive a beamspace weighted minimum mean square error (WMMSE) precoding scheme based on the equivalent beamspace channel matrix. The derivation employs an sCSI-based WMMSE (sWMMSE) formulation derived from an upper bound approximation of the ergodic sum rate, which provides a tighter estimate than the expected mean square error (MSE)-based lower bound approximation. Simulation results demonstrate that the proposed sCSI-based beamspace transmission scheme achieves a favorable trade-off between performance and computational complexity.
