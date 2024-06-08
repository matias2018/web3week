export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 m-5">
      <hr />
      <p className="col-4 mb-0 text-body-secondary">
        &copy; 2024 FundRaiser, Inc.
      </p>
      <ul className="nav col-4 justify-content-end">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">Help</a>
        </li>
        <li className="nav-item">
          <a href="/create" className="nav-link px-2 text-body-secondary">Ask Help</a>
        </li>
      </ul>
    </footer>
  )
}