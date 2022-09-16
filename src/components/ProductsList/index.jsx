import React,{useEffect} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from '../../redux/actions/productsActions';
import Header from "../Header/index";
import Product from "../Product/index";

const Index = () => {
  const products = useSelector((state) => state);
  const dispatch =useDispatch();
 
  async function fetchProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=>{
    fetchProducts();
  },[]);
  
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <Product />
        </div>
      </div>
    </>
  );
};

export default Index;
