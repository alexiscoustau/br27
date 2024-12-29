import { galeria } from "../../mockdata";
import ItemImg from "./ItemImg/ItemImg";
import "./ListImg.css";

const ListImg = () => {
  return (
    <>
      <div className="row g-0 fotos">
        <div className="col-sm-0 col-md-2 col-lg-3"></div>
        <div className="col-sm-0 col-md-8 col-lg-6 galeria">
          {galeria.galeria.map((galeria, index) => (
            <ItemImg key={index} galeria={galeria} />
          ))}
        </div>

        <div className="col-sm-0 col-md-2 col-lg-3 franja1">
          <div className="controlcepillo">
            <div className="cepillo"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListImg;
