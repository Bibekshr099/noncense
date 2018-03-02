# Noncense

### Nonsense is a software development project aiming to construct a Diamond/Precious Stone marketplace on the Ethereum blockchain.

## Background and Overview

Problem Statement: Currently, peer to peer buying and selling of jewelry isn’t possible at a large scale because identification still relies on paper certificates. With the recent creation of Everledger, a company that gives each newly sold diamond a digital identification and registers it on a blockchain, our plan is to create an online peer to peer marketplace and establish a layer of trust that allows users to transact their assets without going through a middle man. We’ll accomplish this by using Ethereum to construct a decentralized architectural framework where each user is in control of their funds, their assets, and their data.  All of this is accomplished without any centralized institution taking a cut of their profits.  

## Features
* User authentication
* Buy precious stones using Ethereum
* Live conversion of Ethereum value to US Dollars
* Post precious stones on the site to sell
* Marketplace constructed on the decentralized Ethereum network.
* Interactive and adaptive website styling

![](https://github.com/cylinda47/noncense/blob/master/public/Screen%20Shot%202017-12-17%20at%205.04.48%20PM.png)

## Technologies & Technical Challenges

**Framework: Truffle**
* A one-stop shop for backend, frontend and testing detailed below (like Ruby on Rails).

**Backend: Ethereum Smart Contracts**

**Frontend: Web3 API, JavaScript, HTML, CSS**

**Development Testing: Remix IDE, Truffle Develop**

### Composing a Smart Contract
* Ethereum smart contracts are written using Solidity 
* Web3.js is the communication layer between Smart Contracts deployed on the blockchain network and the client facing side of any web application. 
* Determining the details of the contract was of critical importance as once the contracts are live, they determine the details of the transaction. One challenge we faced was testing the contracts on Remix IDE and then transferring the contracts to our particular application.  The behaviors varied slightly in our environment.

### Web3.js
* Communicates between frontend and backend.
    * Backend:
        * Ethereum node
        * Smart Contract deployed to the blockchain
    * Frontend:
        * JavaScript/Web Application
    * Uses JSON RPC calls
    * Web3 Reducer
    
    
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

### Constructing a Marketplace
* Determining the nature of the interactions using Smart Contracts.
    * Users can buy and sell precious stones. It may also come to light that more details of the transaction would be necessary for this marketplace to be functional.
    
![](https://github.com/cylinda47/noncense/blob/master/public/Screen%20Shot%202017-12-17%20at%205.07.53%20PM.png)

* Below is the Buy function of our Diamonds Contract:

        function buy(uint id) payable public {
            // id is index of diamond in the arrays
            require(diamondPrices.length > id &&
                msg.value >= diamondPrices[id] * 1e18);

            diamondOwners[id].transfer(diamondPrices[id] * 1e18);
            diamondOwners[id] = msg.sender; // change owner
        }
   * The function call first checks that the id of the diamond being purchased is located within the state of stored diamonds
   and that the account from which the contract was called has the necessary funds to purchase the diamond
   * Next, the built in solidity function "transfer" is used to transfer funds to the original owner's account and then the purchaser of the diamond is made the new owner. 

### UX
* Frontend Interface
    * Implemented calls to the blockchain to search for precious stones that are available.
    * We have sent the stone data to render on the application interface.
    * The desired details of the transaction for the seller will be available for the user to see.

* Backend
    * Our backend is a standard Ethereum build which houses all of the necessary information.  This includes Smart Contracts and React for website navigation.

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
