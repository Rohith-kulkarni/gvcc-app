import "./index.css";

const ProductDetailCard = ({
  productDetails,
  setShowDetailed,
  setShowEnquiry,
}) => {
  const { name, category, longDesc, price, imageUrl } = productDetails;
  return (
    <div className="modal-overlay" onClick={() => setShowDetailed(false)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={() => setShowDetailed(false)}
        >
          ✕
        </button>

        <div className="product-long-container">
          <div className="product-long-image-container">
            <img src={imageUrl} alt={name} className="product-long-image" />
          </div>
          <div className="product-long-details-container">
            <p className="product-long-name">{name}</p>
            <p className="product-long-category">{category}</p>
            <p className="product-long-desc">{longDesc}</p>
            <p className="product-long-price">{price}</p>
            <button
              type="button"
              onClick={() => {
                setShowEnquiry(true);
                setShowDetailed(false);
              }}
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
