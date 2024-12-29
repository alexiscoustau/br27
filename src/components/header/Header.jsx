import "./Header.css";
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <>
      <div className="header row g-0">
        <Nav />
        <div className="col-sm-12 col-md-6 col-lg-6 row g-0">
          <div className="col-sm-0 col-md-12 col-lg-12 espacio"></div>
          <div className="col-sm-12 col-md-12 col-lg-12 espaciohero text-center">
            <div className="hero text-center"></div>
            <a
              className="botonwp animate__animated animate__backInLeft"
              href="https://wa.me/+5491171251704/?text=Hola%20BR27%20me%20gustaria%20reservar%20un%20turno"
              target="_blank"
            >
              <i className="fa fa-whatsapp "></i> Reserva tu turno
            </a>
          </div>
        </div>
        <div className="col-sm-0 col-md-6 col-lg-6"></div>
      </div>
    </>
  );
};

export default Header;
