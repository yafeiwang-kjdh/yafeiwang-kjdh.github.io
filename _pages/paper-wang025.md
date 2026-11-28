---
layout: page
title: A tensor-structured approach to dynamic channel prediction for massive MIMO
  systems with temporal non-stationarity
permalink: /publications/2025-11-07-a-tensor-structured-approach-to-dynamic-channel-prediction-for-massive-mimo-systems-with-temporal-n/
nav: false
---

{% bibliography --query @*[key=wang025] %}

## Abstract

In moderate- to high-mobility scenarios, CSI varies rapidly and becomes temporally non-stationary, leading to severe performance degradation in the massive MIMO transmissions. To address this issue, we propose a tensor-structured approach to dynamic channel prediction (TS-DCP) for massive MIMO systems with temporal non-stationarity, exploiting both dual-timescale and cross-domain correlations. Specifically, due to inherent spatial consistency, non-stationary channels over long-timescales can be approximated as stationary on short-timescales, decoupling complicated temporal correlations into more tractable dual-timescale ones. To exploit such property, we propose the sliding frame structure composed of multiple pilot OFDM symbols, which capture short-timescale correlations within frames by Doppler domain modeling and long-timescale correlations across frames by Markov/autoregressive processes. Building on this, we develop the Tucker-based spatial-frequency-temporal domain channel model, incorporating angle-delay-Doppler (ADD) domain channels and factor matrices parameterized by ADD domain grids. Furthermore, we model cross-domain correlations of ADD domain channels within each frame, induced by clustered scattering, through the Markov random field and tensor-coupled Gaussian distribution that incorporates high-order neighboring structures. Following these probabilistic models, we formulate the TS-DCP problem as variational free energy (VFE) minimization, and unify different inference rules through the structure design of trial beliefs. This formulation results in the dual-layer VFE optimization process and yields the online TS-DCP algorithm, where the computational complexity is reduced by exploiting tensor-structured operations. Numerical simulations demonstrate the significant superiority of the proposed algorithm over benchmarks in terms of channel prediction performance.
