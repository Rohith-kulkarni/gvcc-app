import { useState, useEffect } from "react";
import axios from "axios";
import ProductShort from "../ProductShort";
import "./index.css";
import ProductDetailCard from "../ProductDetailCard";
import EnquiryForm from "../EnquiryForm";

const Products = (props) => {
  const { setProductsCount, page, limit, search, category } = props;
  const [products, setProducts] = useState([]);
  const [detailedProd, setDetailedProd] = useState({});
  const [showDetailed, setShowDetailed] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const onProdSelect = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/products/${id}`
    );
    const selectedProd = response.data;
    const updatedProd = {
      id: selectedProd.id,
      name: selectedProd.name,
      category: selectedProd.category,
      shortDesc: selectedProd.short_desc,
      longDesc: selectedProd.long_desc,
      price: selectedProd.price,
      imageUrl: selectedProd.image_url,
    };
    setDetailedProd(updatedProd);
  };

  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL;
    const getProducts = async () => {
      const res = await axios.get(
        `${url}/products?search=${search}&category=${category}&page=${page}&limit=${limit}`,
      );

      const { products: data, totalCount } = res.data;

      setProducts(
        data.map((prod) => ({
          id: prod.id,
          name: prod.name,
          category: prod.category,
          shortDesc: prod.short_desc,
          longDesc: prod.long_desc,
          imageUrl: prod.image_url,
          price: prod.price,
        }))
      );

      setProductsCount(totalCount);
    };

    getProducts();
  }, [page, limit, search, category, setProductsCount]);

  return (
    <div className="products-outer-container">
      <div className="products-inner-container">
        {products.map((e) => (
          <ProductShort
            key={e.id}
            productDetails={e}
            onProdSelect={onProdSelect}
            setShowDetailed={setShowDetailed}
          />
        ))}
      </div>
      {showDetailed && (
        <ProductDetailCard
          setShowDetailed={setShowDetailed}
          productDetails={detailedProd}
          setShowEnquiry={setShowEnquiry}
        />
      )}
      {showEnquiry && (
        <EnquiryForm
          setShowEnquiry={setShowEnquiry}
          productDetails={detailedProd}
          setShowDetailed={setShowDetailed}
        />
      )}
    </div>
  );
};

export default Products;
