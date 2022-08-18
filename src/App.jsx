import React, { Component } from "react";
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Products from "./components/products/Products";

export default class App extends Component {
  state = {
    productsData: [
      {
        Tittle: "Fancy Product",
        isSale: false,
        isStars: false,
        priceUnmute: false,
        priceMute: `$40.00 - $80.00`,
        btnName: "View option",
      },
      {
        Tittle: "Special Item",
        isSale: "Sale",
        isStars: true,
        priceUnmute: `$20.00`,
        priceMute: `$18.00`,
        btnName: "Add to cart",
      },
      {
        Tittle: "Sale Item",
        isSale: "Sale",
        isStars: false,
        priceUnmute: `$50.00`,
        priceMute: `$25.00`,
        btnName: "Add to cart",
      },
      {
        Tittle: "Popular Item",
        isSale: false,
        isStars: true,
        priceUnmute: false,
        priceMute: `$40.00`,
        btnName: "Add to cart",
      },
      {
        Tittle: "Sale Item",
        isSale: "Sale",
        isStars: false,
        priceUnmute: `$50.00`,
        priceMute: `$25.00`,
        btnName: "Add to cart",
      },
      {
        Tittle: "Fancy Product",
        isSale: false,
        isStars: false,
        priceUnmute: false,
        priceMute: `$120.00 - $280.00`,
        btnName: "View option",
      },
      {
        Tittle: "Special Item",
        isSale: "Sale",
        isStars: true,
        priceUnmute: `$20.00`,
        priceMute: `$18.00`,
        btnName: "Add to cart",
      },
      {
        Tittle: "Popular Item",
        isSale: false,
        isStars: true,
        priceUnmute: false,
        priceMute: `$40.00`,
        btnName: "Add to cart",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <Main />
        <Products productsData={this.state.productsData} />
        <Footer />
      </div>
    );
  }
}
