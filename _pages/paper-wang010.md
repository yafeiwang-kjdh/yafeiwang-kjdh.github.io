---
layout: page
title: Soft Demodulator for Symbol-Level Precoding in Coded Multiuser MISO Systems
permalink: /publications/2024-07-03-soft-demodulator-for-symbol-level-precoding-in-coded-multiuser-miso-systems/
nav: false
---

{% bibliography --query @*[key=wang010] %}

## Abstract

In this paper, we consider symbol-level precoding (SLP) in channel-coded multiuser multi-input single-output (MISO) systems. It is observed that the received SLP signals do not always follow Gaussian distribution, rendering the conventional soft demodulation with the Gaussian assumption unsuitable for the coded SLP systems. It, therefore, calls for novel soft demodulator designs for non-Gaussian distributed SLP signals with accurate log-likelihood ratio (LLR) calculation. To this end, we first investigate the non-Gaussian characteristics of both phase-shift keying (PSK) and quadrature amplitude modulation (QAM) received signals with existing SLP schemes and categorize the signals into two distinct types. The first type exhibits an approximate-Gaussian distribution with the outliers extending along the constructive interference region (CIR). In contrast, the second type follows some distribution that significantly deviates from the Gaussian distribution. To obtain accurate LLR, we propose the modified Gaussian soft demodulator and Gaussian mixture model (GMM)-expectation-maximization (EM) soft demodulators to deal with two types of signals respectively. Subsequently, to further reduce the computational complexity and pilot overhead, we put forward a novel neural network named pilot feature extraction network (PFEN) to replace the EM algorithm, leveraging the transformer mechanism in deep learning. Simulation results show that the proposed soft demodulators dramatically improve the throughput of existing SLPs for both PSK and QAM transmission in coded systems.
