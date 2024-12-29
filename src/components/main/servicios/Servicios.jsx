import "./Servicios.css";

const Servicios = () => {
  return (
    <>
      <section className="servicios row g-0">
        <div className="col-sm-0 col-md-2 col-lg-2 "></div>
        <div className="col-sm-0 col-md-4 col-lg-4 row g-0 control">
          <div className="col-sm- col-md-12 col-lg-12  tiposdeservicios text-center  "></div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 control franjanosotros">
          <div className=" logotipo"></div>
        </div>
        <div className="col-sm-0 col-md-2 col-lg-2"></div>
      </section>

      <div className=" control2 row g-0">
        <div className="col-12 franja2"></div>
        <div className="col-12 franja1 control row g-0">
          <div className="filo col-12"></div>
          <h2 className="titulogaleria col-12 text-center">GALERIA</h2>
        </div>
        <div className="controltijeras">
          <div className="tijerasimg"></div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
