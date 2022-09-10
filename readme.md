# Our Project🤗 
DEMOSTRATION LINK:- https://youtu.be/OFN1i9KwMoE

Prerequisites:
>Install Node modules

IPFS
>ipfs-http-client@^49.0.2

Solidity compiler version
>Solidity compiler: 0.6.3

To run: 
1) Connect wallet to rinkeby
2) Type
>npm run start 

This DAPP lets anyone add their digital art to IPFS and then put it on auction. Once sold, it is tokenized in ERC721 token ``$ART`` making this platform a censorship resistant and safe and secure e-auction marketplace for digital art. 
The auction takes place where the seller can start it with 
1) ``price``: The minimum price or starting price of the auction 
2) ``_bidincrement``: The incremental value is the fixed constant increment that happens to the value. It prevents bots from bidding with a small amount as well as incentivizes the bidder with the best deal.
3) ``tokenURI``: It is the IPFS hash(CID) generated after uploading files to IPFS
4) ``timeperiod``: Minimum Time period after which auction can end
5) ``name``: Name of the Art

There are two kinds of token IDS:
1) ``_tokenIds`` Unique Image ID that are tokenized
2) ``_artItemIds`` Unique ID of images for sale, but not tokenized

Each address is mapped to _tokenId and their bids are stored for that _tokenIDs. 

There are two kinds of bids:
1) ``highestBid``: It is the maximum bid price. 
2) ``highestBindingBid``: The highest bidding bid is the maximum bid amount put in by the user.

**For example:**
The seller sets the minimum price of art X at 10Eth and the increment value is 1Eth. If Bidder named Sachin bids 15Eth, The highest Bid is 11Eth(highestBid) and the amount stored internally as the highest bidding amount is 15Eth(highestBindingBid). 
If a person called Sanchita bids 12Eth, Sachin's highest bid of 13Eth will automatically be staked. In case no one bids after 11Eth bid of Sachin, then Sachin is the highest bidder and when the owner of the art stops the auction, the Token will be minted for 11Eth and rest of the 4Eth will be returned to Sachin. 
Scenarios of Bidder over-bidding his own bid, other bidders under-bidding the Highestbid or the highestBindingBid are covered.

``Widthraw()``:
There is a seperate widhraw function that follows the withdrawal design pattern to prevent re-entrenacy attacks. Each user withdraws his or her own funds.  

There is no owner of the contract, and anyone can put his/her art for sale and tokenize it or buy it. If at any point the frontend application is censored down, the contract is untouched as it is stored on-chain along with IPFS hash.

😎😎**BASIC INFRASTRUCTURE**😎😎

👉Get USD/MATIC Price Feed with Chainlink.

👉Upload Art file to IPFS.

👉Recieve IPFS hash.

👉Bundle all TX details, sign and complete with Portis.

👉Store art item auction on Matic Network where auction smart contract is deployed.

**FUTURE SCALIBILITY**

✌In future we plan to use Pinata to store all the metadata of our NFT off-chain and Biconomy to make the first transaction gasless for a user. We will also implement DAO for contract changes and product development and create upgradable contracts through proxy pattern.

✌We are working on to increase the decentralization as much as possible to prevent any sort of extra storage rather than blockchain itself

😎😎**CHALLENGES ENCOUNTERED AND RESOLVED**😎😎

🎭*RE-ENTREANCY ATTACK*-It was prevented by using a withdrawal-pattern design decision where the logic is implemented first and transfer is done at last.

🎭*DDoS ATTACK*-We went through functions to check no fallback function or any other function can be exploited

🎭*Decentralized storage*-We did not want a centralized point of control and failure hence we opted for IPFS.

🎭*Decentralized Price-Feed and Easy Onboarding*-Chainlink was integrated for getting price feed of Matic/USD.We used Portis Wallet for easy integration and user friendly UI.

🎭*High gas fees*-We deployed on Layer-2 solutionand choose Matic network to reduce gas fees and fasten the transactions

🎭*Bots bidding*-Just like centralized exchanges are filled with bots which manupilate the price, same can be the case with NFTs. We set a minimum increment which is set by seller.
