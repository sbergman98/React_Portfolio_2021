

function NavTabs(props) {
  return (
  <div class="card text-center">
  <div class="card-header">
    <ul className="nav ">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          <b>About</b>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          <b>Contact</b>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          <b>Portfolio</b>
        </a>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default NavTabs;
