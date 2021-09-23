import axios from "axios";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { nftaddress, nftmarketaddress } from "../config";

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
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
    const data = await marketContract.fetchMyNFTs();

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
    setNfts(items);
    setLoadingState("loaded");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        {!nfts.length && (
          <h1 className="p-5 mt-20 font-serif text-3xl text-gray-800">
            No purchased Items.
          </h1>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {nfts.map((nft, i) => (
            <div key={i} className="overflow-hidden border shadow rounded-xl">
              <img src={nft.image} className="rounded" />
              <div className="p-4 bg-black">
                <p className="text-xl font-bold text-white">{nft.name}</p>
                <p className="text-xl font-bold text-white">
                  Price - {nft.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
