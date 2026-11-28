---
layout: page
title: Robust Symbol-Level Precoding for Massive MIMO Communication Under Channel
  Aging
permalink: /publications/2024-03-20-robust-symbol-level-precoding-for-massive-mimo-communication-under-channel-aging/
nav: false
---

{% bibliography --query @*[key=wang009] %}

## Abstract

This paper investigates the robust design of symbol-level precoding (SLP) for multiuser multiple-input multiple-output (MIMO) downlink transmission with imperfect channel state information (CSI) caused by channel aging. By utilizing the a posteriori channel model based on the widely adopted jointly correlated channel model, the imperfect CSI is modeled as the statistical CSI incorporating the channel mean and channel variance information with spatial correlation. With the signal model in the presence of channel aging, we formulate the signal-to-noise-plus-interference ratio (SINR) balancing and minimum mean square error (MMSE) problems for robust SLP design. The former targets to maximize the minimum SINR across users, while the latter minimizes the mean square error between the received signal and the target constellation point. When it comes to massive MIMO scenarios, the increment in the number of antennas poses a computational complexity challenge, limiting the deployment of SLP schemes. To address such a challenge, we simplify the objective function of the SINR balancing problem and further derive a closed-form SLP scheme. Besides, by approximating the matrix involved in the computation, we modify the proposed algorithm and develop an MMSE-based SLP scheme with lower computation complexity. Simulation results confirm the superiority of the proposed schemes over the state-of-the-art SLP schemes.
