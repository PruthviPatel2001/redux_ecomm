import React from 'react'
import { useSelector } from 'react-redux';


const ProductComponent = () => {
    const products = useSelector((state) => state.allproducts.products);
    

    const renderList =products.map((product) => {
            const { id, title, image, price, category } = product;
               
            return (
                
                <div className="col-lg-4 col-md-4 ml-1 my-2 col-lg-offset-2" key={id}>
                    <div className="card" style={{ width: " 28rem",height:"34rem" }}>
                        <img src={image} style={{height:"300px",width:"300px"}} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <hr />
                            <h5 className="card-title" style={{fontSize:"1rem"}}>{title}</h5>
                            <p className="card-text"> Rs.{price}</p>
                            <p className="card-text"> {category}</p>
        
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            );
                
              
        })
    
       

    return (
        <>
            <div className="row">
                {renderList}
            </div>
      </>
    )
   
}

export default ProductComponent
