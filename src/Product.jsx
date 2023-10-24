import React from 'react'

function Product(props) {
  return (
    
    <div className="col-lg-4 col-md-5  ">
  <div className="categories">
    <h2> {props.title} </h2>
    <p className="text-black pt-3 ">{props.desc}</p>
    <p>{props.price} </p>
  </div>
</div>

  )
}

export default Product