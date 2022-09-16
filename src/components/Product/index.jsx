import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import Header from "../Header/index";

const Index = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList=products.map((product)=>{
    const {id,title,price,image}=product;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={id}>
        <Link to={`/product/${id}`}>
        <div className="card">
          <img src={image} className="card-img-top w-100" alt={title}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">$ {price}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </Link>
      </div>
    );
  });
  return (
    <>
    {renderList}
    </>
  );

};

export default Index;
