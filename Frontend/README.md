The seller sets the minimum price of art X at 10Eth and the increment value is 1Eth. If Bidder named Sachin bids 15Eth, The highest Bid is 11Eth(highestBid) and the amount stored internally as the highest bidding amount is 15Eth(highestBindingBid). 
If a person called Sanchita bids 12Eth, Sachin's highest bid of 13Eth will automatically be staked. In case no one bids after 11Eth bid of Sachin, then Sachin is the highest bidder and when the owner of the art stops the auction, the Token will be minted for 11Eth and rest of the 4Eth will be returned to Sachin. 
Scenarios of Bidder over-bidding his own bid, other bidders under-bidding the Highestbid or the highestBindingBid are covered.

``Widthraw()``:
There is a seperate widhraw function that follows the withdrawal design pattern to prevent re-entrenacy attacks. Each user withdraws his or her own funds.  

There is no owner of the contract, and anyone can put his/her art for sale and tokenize it or buy it. If at any point the frontend application is censored down, the contract is untouched as it is stored on-chain along with IPFS hash.