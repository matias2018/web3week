"use client"

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { openRequest } from "@/services/Web3Service";

export default function Home() {

  const [requests, setRequests] = useState({
    title: "",
    description: "",
    contact: "",
    goal: 0
  });

  function onInputChange(e) {
    setRequests(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
  }

  function btnSaveClick() {
    alert("Starting process to save request...");
    openRequest(requests)
      .then((result) => {
        alert("Request saved successfully! It may take a few minutes to be visible.");
        window.location.href = "/";
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="ps-5">
          <div className="row my-3">
            <p className="lead">All fields are mandatory</p>
          </div>

          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="title"
                className="form-control"
                max-length={150}
                value={requests.title}
                onChange={onInputChange}
              />
              <label htmlFor="title">Summary of what you need</label>
            </div>
          </div>

          <div className="col-6">
            <div className="form-floating mb-3">
              <textarea
                id="description"
                className="form-control"
                style={{ height: 100 }}
                value={requests.description}
                onChange={onInputChange}
              ></textarea>
              <label htmlFor="description">Provide necessary information and location for physical deliveries.</label>
            </div>
          </div>

          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="contact"
                className="form-control"
                value={requests.contact}
                onChange={onInputChange}
              />
              <label htmlFor="contact">Contact information</label>
            </div>
          </div>

          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                id="goal"
                className="form-control"
                value={requests.goal}
                onChange={onInputChange}
              />
              <label htmlFor="goal">Your goal in BNB (leave blank if you wich not to receive donnation in crypto)</label>
            </div>
          </div>

          <div className="row">
            <div className="col-1 mb-3">
              <a href="/" className="btn btn-outline-dark col-12 p-3">Back</a>
            </div>
            <div className="col-5 mb-3 p-0">
              <button type="button" className="btn btn-dark col-12 p-3" onClick={btnSaveClick}>Send Request</button>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}
