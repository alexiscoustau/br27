import "./Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div className="franja1 "></div>
      <section className="nosotros row g-0">
        <div className="col-sm-0 col-md-2 col-lg-2 franjanosotros"></div>
        <div className="col-sm-12 col-md-4 col-lg-4 texto text-center">
          <h2 className="titulo text-center info ">NOSOTROS</h2>
          <br />
          <h4 className="info text-center descripcion ">
            NOS DEDICAMOS AL SERVICIO DE LA ESTETICA MASCULINA CON LOS MEJORES
            PRODUCTOS Y TECNICAS EN TENDENCIA . NUESTRA VISION ESTA BASADA EN EL
            COMPROMISO Y EL PERFECCIONAMIENTO CONSTANTE PARA DARTE UNA BUENA
            IMAGEN.
          </h4>
        </div>
        <div className="col-sm-0 col-md-4 col-lg-4 imgbarberiacontrol ">
          <div className="imgbarberia"></div>
        </div>
        <div className="col-sm-0 col-md-2 col-lg-2 franjanosotros "></div>
      </section>

      <div className=" row g-0">
        <div className="col-12 franja1"></div>
        <div className="col-12 franja2"></div>
        <div className="controlnavaja">
          <div className="navajaimg"></div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
