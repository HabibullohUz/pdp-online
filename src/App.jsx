import React, { Component } from "react";
import Cards from "./components/cards/cards";
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";

export default class App extends Component {
  state = {
    cardsData: [
      {
        title: "Free",
        Price: 0,
        usersCount: 10,
        gb: 2,
        support: "Email",
        btnName: "Sign up for free",
      },
      {
        title: "Pro",
        Price: 15,
        usersCount: 20,
        gb: 10,
        support: "Priority email",
        btnName: "Get started",
      },
      {
        title: "Enterprise",
        Price: 29,
        usersCount: 10,
        gb: 15,
        support: "Phone and email",
        btnName: "Contact Us",
      },
    ],
  };

  render() {
    const { cardsData } = this.state;
    return (
      <div className="container">
        <Navbar />
        <Main />
        <Cards setDatas={cardsData} />
        <Footer/>
      </div>
    );
  }
}
