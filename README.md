# Noncense

[Live Site](https://noncense.herokuapp.com)

### Nonsense is a software development project aiming to construct a Diamond/Precious Stone marketplace on the Ethereum network.

## Background and Overview

Problem Statement: Currently, peer to peer buying and selling of jewelry isn’t possible because of identification and authentication issues. With the recent creation of Everledger, a company that gives each newly sold diamond a digital identification and registers it on a blockchain, our plan is to create an online peer to peer marketplace and establish a layer of trust that allows users to buy and sell high value jewelry assets without having to going through a middle man. We’ll accomplish this by using Ethereum to construct a decentralized protocol that allows users to retain control of their funds, their assets, and their data while increasing the security and transparency of their transactions. All of this is accomplished without any centralized entity taking a cut of their profits.  

![](https://github.com/cylinda47/noncense/blob/master/public/Screen%20Shot%202017-12-17%20at%205.04.48%20PM.png)


## Features
* Buy jewelry assets and digitally record transactions on the Ethereum network
* Live conversion of Ethereum value to US Dollars
* Post jewelry assets on the site to sell
* Give each jewelry asset a unique digital thumbprint corresponding to its physical features 
* Store information on each asset and each transaction in a decentralized manner
* Integrate payment and authentication services all via metamask extension
* Interactive and adaptive website styling

 
       
![](https://github.com/cylinda47/noncense/blob/master/public/Screen%20Shot%202017-12-17%20at%205.07.53%20PM.png)



## Technologies & Technical Challenges

**Framework: Truffle**
* A one-stop shop for backend, frontend and testing detailed below (like Ruby on Rails).

**Development Testing: Remix IDE**

### Composing a Smart Contract
* Developed using Solidity, a high level programming language that compiles down into EVM (Ethereum Virtual Machine) code
* Testing environment consisted of Truffle Develop and the Remix IDE 
* Smart Contracts deployed to the Ropsten Test Network (an Ethereum public testnet). Ethereum testnets behave similarly to the Ethereum mainnet (they even have nontrivial mining difficulty); however, ether and gas don't cost real money on these networks. 

* Here's a sample of the smart contract code. Below is the Buy function of the Diamonds.sol contract:

        function buy(uint id) payable public {
            // id is index of diamond in the arrays
            require(diamondPrices.length > id &&
                msg.value >= diamondPrices[id] * 1e18);

            diamondOwners[id].transfer(diamondPrices[id] * 1e18);
            diamondOwners[id] = msg.sender; // change owner
        }
        


**Frontend: Web3.js, React, Redux, JavaScript, HTML, CSS**
The frontend uses a Redux store containing a single, global state and React components to render the various portions of the web application. 

### Web3.js
* Web3.js serves as a communication layer between any Ethereum Node and a traditional JavaScript application frontend. It's a  Javascript library that wraps around multiple higher order components and provides standardized function calls to read and write information to the underlying Ethereum blockchain. Used in the application frontend. 

Each application creates an instance of a web3 object, which allows the application to call certain functions and communicate with a specific Ethereum node through a given Wallet provider. 

For development, we used ganache, a local development blockchain that came with a built in ganache-provider. 
The production ready site uses Infura, a decentralized hosting service that runs full Ethereum nodes for developers. Infura hosts a particular node and gives developers a convenient API for communicating with that unique node to make function calls to deployed smart contract code. This way, developers don't need to run full nodes in order to start creating applications. For now, the Infura hosting service is free. 

The following is an snippet of code that shows how the Web3.js library is used in the application frontend. 

    * The Web3 Reducer handles actions that attempt to change the state 
      of the Web3 object
    
    
          const initialState = {
            web3Instance: null
          }

          const web3Reducer = (state = initialState, action) => {
            if (action.type === 'WEB3_INITIALIZED')
            {
              return Object.assign({}, state, {
                web3Instance: action.payload.web3Instance
              })
            }

            return state
          }

          export default web3Reducer


## Team Members

**Jacob Butler, Kevin Lee, Linda Chan, William Meng**

## Bonus Features

- [ ] Order history
- [ ] Integration with PayPal/mainstream payment services
- [ ] Integrate with Everledger
- [ ] Efficiency and security
- [ ] Escrow
- [ ] Decentralized hosting
- [ ] Reviews/reputation
- [ ] Search/filter
