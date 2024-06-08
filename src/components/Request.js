import { generateAvatarURL } from "@cfx-kit/wallet-avatar"
import Web3 from "web3"
import { closeRequest, donate } from "../services/Web3Service"

export default function Request({ data }) {
  function btnCloseClick() {
    if (!confirm("Are you sure you want to close this request?")) return;

    closeRequest(data.id)
      .then((result) => {
        alert("Request closed successfully!");
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  };

  function btnHelpClick() {
    const donationInBNB = prompt("How much do you want to donate in BNB?", 0);
    donate(data.id, donationInBNB)
      .then((result) => {
        alert("Donation made successfully! Please wait a few minutes for the balance to be updated.");
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  };

  return (
    <>
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img src={generateAvatarURL(data.author)} width="32" height="32" className="rounded-circle" alt="" />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div className="row">
            <div className="col-10">
              <h5>{data.title} &rsaquo;&rsaquo; Contacto: {data.contact} </h5>
            </div>
            <div className="col-2">
              <div className="text-end">
                {
                  localStorage.getItem("wallet") === data.author.toLowerCase()
                    ? <button className="btn btn-danger btn-sm" onClick={btnCloseClick}>Delete</button>
                    : <button className="btn btn-success btn-sm" onClick={btnHelpClick}>&#36; Help</button>
                }
              </div>
            </div>
            <p className="opacity-75 pe-5 mb-0 me-5">{data.description}</p>
            <div className="row">
              <div className="col">
                <span className="me-1 opacity-75">Goal:</span>
                <span className="opacity-75">
                  {
                    data.balance
                      ? `BNB ${Web3.utils.fromWei(data.balance, "ether")} obtained from BNB ${Web3.utils.fromWei(data.goal, "ether")}`
                      : `BNB ${Web3.utils.fromWei(data.goal, "ether")}`
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}