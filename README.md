# PYTH PRICE PUSHER

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Pyth Price Pusher is a smart contract that allows projects to subscribe to price feeds provided by the Pyth network. 
The smart contract allows subscribers to set intervals and price change thresholds and award users with bounties for updating the price feeds when the correct criteria are met.

## Installation

To see the scrappy WIP frontend navigate to ppp-fe and do a yarn, yarn dev.  Contract/ foundry project is at ppp folder.  See Live demos for more.


## Usage

Once the smart contract is deployed, projects can subscribe to price feeds by calling the createSubscription function and passing in the ID of the price feed, the timestamp threshold, the percent change threshold, and the bounty amount.
```
function createSubscription(
    bytes32 id,
    uint256 timestampThreshold,
    int64 percentChangeThreshold,
    uint256 bountyAmount
) external payable
```
Subscribers can also update their subscriptions by calling the updateSubscription function.

```
function updateSubscription(uint256 index) external
```


## Live Demo
[b0S.gg Frontend](https://bos.gg/#/markeljan.near/widget/pyth-price-pusher)

[Contract Live on Avalanche](https://snowtrace.io/address/0x843e499e54d8d0c2274da668faa748d8206846f8#code)

[LionHack Devfolio Submission](https://devfolio.co/projects/pyth-price-pusher-4161)

<img width="1085" alt="image" src="https://user-images.githubusercontent.com/12901349/232318743-3bf8346e-9694-4691-82c9-40ca61a04f66.png">


