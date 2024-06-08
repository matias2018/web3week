"use client"

import { useState, useEffect } from "react";
import { doLogin } from "@/services/Web3Service";

export default function Header() {

  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setWallet(localStorage.getItem("wallet" || ""));
  }, [])

  function btnLoginClick() {
    doLogin()
      .then(wallet => setWallet(wallet))
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <a href="/" className="justify-content-start" style={{ textDecoration: "none" }}>
            <h1 className="fw-bold text-light">FundRaiser</h1>
          </a>
          <div className="text-end col-9">
            {
              wallet
                ? <a href="/create" className="btn btn-warning">Ask For Help</a>
                :
                <button type="button" className="btn btn-outline-light me-2" onClick={btnLoginClick}>
                  <img src="/metamask.svg" alt="" className="me-3" />Log In
                </button>
            }
          </div>
        </div>
      </div>
    </header>
  )
}