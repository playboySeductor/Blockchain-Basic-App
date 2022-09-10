Two Structs store the Art Item Information and the highest bid information:
``` 
struct ArtItem {
        address payable seller; //address of seller
        uint256 minbid;     //minimum price by artist/seller
        string tokenURI;    //IPFS URL
        bool exists;        //tracks item's existence
        uint bidIncrement;  //increment of bid
        uint time;          // art item creation timestamp
        uint timePeriod;    // duration of auction
        bool cancelled;     // checks if auction is closed
        bool auctionstarted;    // checks if aution is open
        string name;        // name of art item
    }
    
    struct bidding{
        uint highestBindingBid;         //highest Bidding Bid of the tokenid
        address payable highestBidder;  //current highest bidder
    }
```