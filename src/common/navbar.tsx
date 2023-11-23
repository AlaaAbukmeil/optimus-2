function NavBar(props: any) {
  return (
    <div className="sidebar-navbar">
      <button
        title="sidebar"
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <img src="/photos/sidebar.png" alt="" className="sidebar-img" />
      </button>
      <p className="navbar-text">{props.pageName}</p>
      <div
        className="offcanvas offcanvas-start sidebar"
        data-bs-scroll="true"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <img src="/photos/optimusLogo.png" className="logo-img" alt="" />
        </div>
        <hr className="navbar-hr"/>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/historical-data">
                Historical Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/analytics">
                Analytics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/device-management">
                Device Mangement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calendar">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users-access">
                Users Access
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Automation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alerts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Developer Options
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Guide
              </a>
            </li>
          </ul>
          <hr />
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
