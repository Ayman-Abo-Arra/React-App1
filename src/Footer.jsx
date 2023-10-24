import React from 'react'

function Footer() {
  return (
   <>
 <footer className="footer pb-5 bg-dark bg-gradient">
  <div className="container">
    <div className="row contant-footer text-white ">
    
      <div className="col-lg-5">
        <div className="vogal pt-5">
        <p className="fs-5">Footer</p>
          <p>Our aim is to provide high quality, easy to use,<br />
            fastest and affordable shopify themes.</p>
          <a href="tel:Phone : (440) 000 000 0000" className="text-decoration-none text-white">Phone : (440)000
            000 0000</a> <br />
          <a href="mailto:Email : sales@yousite.com" className="text-decoration-none text-white  pt-1">Email :
            sales@yousite.com</a> <br />
          <div className="icon-footer  pt-4">
            <i className="fa-brands fa-facebook " />
            <i className="fa-brands fa-instagram ps-3" />
            <i className="fa-brands fa-youtube ps-3" />
            <i className="fa-brands fa-whatsapp ps-3" />
          </div>
        </div>
      </div>
      <div className="col-lg-2  ">
        <div className="information pt-5 fs-6">
          <h4 className="ps-4 fs-5">INFORMATION</h4>
          <ul className="list row gap-2 pt-3">
            <li> Latest News </li>
            <li> Career</li>
            <li> My Account </li>
            <li> My Cart</li>
            <li> Orders and Returns </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2  ">
        <div className="information pt-5 fs-6">
          <h4 className="ps-4 fs-5">POPULAR</h4>
          <ul className="list row gap-2  pt-3">
            <li> Laptop &amp; Computer </li>
            <li> Audio Accessories</li>
            <li> Smartphones </li>
            <li> Video Games</li>
            <li> Sound Bars </li>
            <li>LED TVs</li>
            <li>Weekly Special</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 ">
        <div className="information pt-5 fs-6">
          <h4 className="ps-4 fs-5">CUSTOMER </h4>
          <ul className="list row gap-2  pt-3">
            <li> Privacy Policy </li>
            <li> Terms &amp; Conditions</li>
            <li> Shipping &amp; Returns </li>
            <li> Help &amp; FAQs</li>
            <li> Refund Policy </li>
            <li>Customer Service</li>
          </ul>
        </div>
      </div>
     
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer