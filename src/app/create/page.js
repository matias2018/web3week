import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
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
              <input type="text" id="title" className="form-control" max-length={150} />
              <label htmlFor="title">Summary of what you need</label>
            </div>
          </div>

          <div className="col-6">
            <div className="form-floating mb-3">
              <textarea id="description" className="form-control" style={{ height: 100 }} />
              <label htmlFor="description">Provide all necessary information for what you need, including the location for physical deliveries.</label>
            </div>
          </div>

          <div className="col-6">
            <div className="form-floating mb-3">
              <input type="number" id="goal" className="form-control" />
              <label htmlFor="goal">Your goal in BNB (leave blank if you wich not to receive donnation in crypto)</label>
            </div>
          </div>

          <div className="row">
            <div className="col-1 mb-3">
              <a href="/" className="btn btn-outline-dark col-12 p-3">Back</a>
            </div>
            <div className="col-5 mb-3 p-0">
              <a href="/" className="btn btn-dark col-12 p-3">Send Request</a>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}
