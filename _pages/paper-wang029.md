---
layout: page
title: Deep Learning-Based Joint Uplink-Downlink CSI Acquisition for Next-Generation
  Upper Mid-Band Systems
permalink: /publications/2025-12-02-deep-learning-based-joint-uplink-downlink-csi-acquisition-for-next-generation-upper-mid-band-system/
nav: false
---

{% bibliography --query @*[key=wang029] %}

## Abstract

In next-generation wireless communication systems, the newly designated upper mid-band (frequency range 3, FR3) has attracted considerable attention, highlighting the need for downlink transmission design that fundamentally relies on accurate CSI. However, CSI acquisition in FR3 systems faces significant challenges: the increased number of antennas and wider transmission bandwidth introduces prohibitive training overhead with traditional estimation approaches, as each probing captures only incomplete spatial-frequency observation, while higher carrier frequencies lead to faster temporal channel variation. To address these challenges, we propose a novel CSI acquisition framework that integrates CSI feedback, uplink and downlink channel estimation, as well as channel prediction in FR3 TDD massive MIMO systems. Specifically, we first develop the Joint UL and DL Channel Estimation Network (JUDCEN) to fuse incomplete observations based on the SRSs and CSI-RSs. By exploiting the complementary characteristics of preliminary UL and DL estimation features, obtained through initial UL estimation and quantized-feedback-assisted DL estimation, it enables full CSI reconstruction in the spatial domain. To mitigate the performance degradation in the feedback process, we propose the Transformer-MLP CSI Feedback Network (TMCFN), employing an MLP-based module to jointly exploit angle- and delay-domain features. Building upon the reconstructed full CSI, we further develop the Mamba-based Channel Prediction Network (MCPN), which exploits selective state-space model mechanism to capture long-range temporal dynamics in the angle-delay domain for future CSI prediction. Simulation results demonstrate that the proposed framework consistently outperforms benchmarks in both CSI acquisition accuracy and transmission spectral efficiency with lower computational complexity.
