import { generateAvatarURL } from "@cfx-kit/wallet-avatar"
import Web3 from "web3"

export default function Request({ data }) {
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
                    ? <button className="btn btn-danger btn-sm">Delete</button>
                    : <button className="btn btn-success btn-sm">&#36; Help</button>
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