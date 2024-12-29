import "./Nav.css";

const Nav = () => {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active instagram"
            aria-current="page"
            href="https://www.instagram.com/br27_barbershop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <div className="iconinst"></div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link instagram" href="#">
            <div className="icontik"></div>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
