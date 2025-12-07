import "./index.css";
const ProductShort = (props) => {
  const { productDetails, onProdSelect, setShowDetailed } = props;
  const { name, category, shortDesc, price, imageUrl, id } = productDetails;
  return (
    <div
      className="product-short-container"
      onClick={() => {
        onProdSelect(id);
        setShowDetailed((prev) => !prev);
      }}
    >
      <div className="product-short-image-container">
        <img src={imageUrl} alt={name} className="product-short-image" />
      </div>
      <div className="product-short-details-container">
        <p className="product-short-name">{name}</p>
        <p className="product-short-category">{category}</p>
        <p className="product-short-desc">{shortDesc}</p>
        <p className="product-short-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductShort;
