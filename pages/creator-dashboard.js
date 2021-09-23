import axios from "axios";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { nftaddress, nftmarketaddress } from "../config";

export default function CreatorDashboard() {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const web3Modal = new Web3Modal();
    const connnection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connnection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      NFTMarket.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const data = await marketContract.fetchItemsCreated();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
        };
        return item;
      })
    );
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNfts(items);
    setLoadingState("loaded");
  }

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No assets created</h1>;
  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className="p-4">
        <h1 className="p-5 mt-20 font-serif text-3xl text-slate">
          Items Listed
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {nfts.map((nft, i) => (
            <Card key={i} image={nft.image} name={nft.name} price={nft.price} />
          ))}
        </div>
      </div>
      <div className="px-4">
        {Boolean(sold.length) && (
          <div>
            <h1 className="py-2 text-2xl">Items sold</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {nfts.map((nft, i) => (
                <Card
                  key={i}
                  image={nft.image}
                  name={nft.name}
                  price={nft.price}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
