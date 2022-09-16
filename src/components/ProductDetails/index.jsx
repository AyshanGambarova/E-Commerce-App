import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../../redux/actions/productsActions";
import axios from "axios";
import Header from "../Header/index";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const product = useSelector((state) => state.product);
  const {image,title,category,price,description}=product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  async function fetchProductDetails() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
  }, [productId]);
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4">
            <img className="w-100" src={image} alt={product.title} />
          </div>
          <div className="col-lg-6 text-capitalize">
            <h3>Category: {category}</h3>
            <h4>{product.title}</h4>
            <p>Description: {description}</p>
            <span>Price: {price} $</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
