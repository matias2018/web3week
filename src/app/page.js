"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Request from "@/components/Request";
import { getOpenRequests } from "@/services/Web3Service";

export default function Home() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests(0);
  }, [])

  async function loadRequests(lastId) {
    try {
      const result = await getOpenRequests(lastId);
      console.log('This is my result', result);
      if (lastId === 0) {
        setRequests(result);
      }
      else {
        requests.push(...result)
        setRequests(requests);
      }
    }
    catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row ps-5">
          <p className="lead m-4">Fund Raising Campaingns For Emergences</p>
        </div>

        <div className="p-4 mx5">
          <div className="list-group">
            {
              requests && requests.length
                ? requests.map(rq => <Request key={rq.id} data={rq} />)
                : <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                  <>Use Log In button to connect your MetaMask wallet, so you can help or ask for help.</>
                </div>
            }
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
