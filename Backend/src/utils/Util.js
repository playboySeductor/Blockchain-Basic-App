import getWeb3 from '../getWeb3';
import ArtAuction from "../abis/ArtAuction.json";
import PriceConsumerV3 from '../abis/PriceConsumerV3.json';

export default class HelperFunctions {
    reloadContractAndAccounts=async ()=>{
        try{
          // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const myContractAddress = process.env.REACT_APP_AUCTION_CONTRACT_ADDRESS;
      const priceFeedContractAddr = process.env.REACT_APP_PRICE_FEED_ADDRESS;

      // Get the contract instance on TEST NET
      const instance = new web3.eth.Contract(ArtAuction.abi,
        myContractAddress);

      const priceFeedInstance = new web3.eth.Contract(PriceConsumerV3.abi,
        priceFeedContractAddr);

      //for local development
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = ArtAuction.networks[networkId];
      // const instance = new web3.eth.Contract(
      //   ArtAuction.abi,
      //   deployedNetwork && deployedNetwork.address,
      // );


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.    
          localStorage.setItem('accounts',accounts);
          let  response = { web3: web3, accounts: accounts, contract: instance, priceFeed: priceFeedInstance };
          return response;
          
        }
        catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      }

    ConvertHoursToSeconds(hours){
        if(!isNaN(hours)){
            return hours * 60 * 60;
        }else{
            return null;
        }
    }

    GetMaskedAccount(rawAccount){
        if(!rawAccount) return null;
        return '********' + rawAccount.substring(35);
    }

    GetUNIXTimeFromDate(date){
        return parseInt((new Date().getTime() / 1000).toFixed(0));
    }

    GetDateFromUNIXTime(unix_timestamp){
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        return new Date(unix_timestamp * 1000);
    }

    GetSecondsLeft(created, expiry){//created(UNIX milisec), expiry (milisec)
        let timeLeft =  this.GetDateFromUNIXTime(Number(created) + Number(expiry)).getTime() - (new Date).getTime();
        return timeLeft / 1000;
    }
}