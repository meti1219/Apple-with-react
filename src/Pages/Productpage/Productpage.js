import React, { Component } from "react";

class Productpage extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      productID: props.match.params.pid,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/phpmyadmin/db_structure.php?server=1&db=anothertest")
      .then((res) => res.json())
      .then((products) => {
        const productList = products.products;
        const singleProduct = productList.filter(
          (x) => x.Id == this.state.productID
        );
        this.setState((state) => {
          return {
            products: singleProduct,
          };
        });
      });
  }

  render() {
    // console.log(this.state.productID);
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {this.state.products.map((product) => {
              let id = product.Id;
              let title = product.Title;
              let img = product.img;
              let Brief = product.Brief;
              let StartPrice = product.StartPrice;
              let PriceRange = product.PriceRange;
              let productPage = "/iphone/" + id;
              let details = product.Description;

              let productDiv = (
                <div key={id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12">
                      <div className="title-wraper">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    );
  }
}
export default Productpage;
