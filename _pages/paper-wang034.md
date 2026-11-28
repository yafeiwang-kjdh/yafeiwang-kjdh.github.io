---
layout: page
title: Tensor-Structured Bayesian Channel Prediction for Upper Mid-Band XL-MIMO Systems
permalink: /publications/2026-01-18-tensor-structured-bayesian-channel-prediction-for-upper-mid-band-xl-mimo-systems/
nav: false
---

{% bibliography --query @*[key=wang034] %}

## Abstract

The upper mid-band balances coverage and capacity for future cellular systems and also embraces XL-MIMO systems, offering enhanced spectral and energy efficiency. However, these benefits are significantly degraded under mobility due to channel aging, and further exacerbated by the unique near-field and spatial non-stationarity propagation in such systems. To address this challenge, we propose a novel channel prediction approach that incorporates dedicated channel modeling, probabilistic representations, and Bayesian inference algorithms for this emerging scenario. Specifically, we develop tensor-structured channel models in both the spatial-frequency-temporal and beam-delay-Doppler domains, which leverage temporal correlations among multiple pilot symbols for channel prediction. The factor matrices of multi-linear transformations are parameterized by beam-delay-Doppler domain grids and spatial non-stationarity factors, where beam domain grids are jointly determined by angles and slopes under spatial-chirp based near-field representations. To enable tractable inference, we replace environment-dependent beam-delay-Doppler domain grids with uniformly sampled ones, and introduce perturbation parameters in each domain to mitigate grid mismatch. We further propose a hybrid beam domain strategy that integrates angle-only sampling with slope hyperparameterization to avoid the computational burden of explicit slope sampling. Based on the probabilistic models, we develop a tensor-structured bi-layer inference algorithm under the expectation-maximization framework, which reduces computational complexity via tensor operations by leveraging the bi-layer factor graph for approximate E-step inference and an alternating strategy with closed-form updates in the M-step. Numerical simulations based on the near-practical channel simulator demonstrate the superior channel prediction performance of the proposed algorithm.
