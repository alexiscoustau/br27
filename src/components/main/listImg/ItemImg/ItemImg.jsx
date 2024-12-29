import "./ItemImg.css";
const ItemImg = ({ galeria }) => {
  return (
    <>
      <img src={galeria.img} className="img" alt="img"></img>
    </>
  );
};

export default ItemImg;
