import React from "react";
import logo from "./images/logo.png";
import hambugerImage from "./images/foods/Smoked-Hamburger.png";
import beansImage from "./images/foods/loobia.jpeg";
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header cafeName="Café Chi" instagram="cafechi1402" logo={logo} />
      <main className="menu-container">
        <article className="menu-item">
          <img src={hambugerImage} alt="" />
          <div className="food-info">
            <h3>همبرگر</h3>
            <p>150 گرم گوشت چرخ کرده + سبزیجات</p>
          </div>
          <span>20</span>
          <div className="food-price">120,000</div>
        </article>
        <article className="menu-item unavailable">
          <img src={beansImage} alt="" />
          <div className="food-info">
            <h3>خوراک لوبیا</h3>
            <p>لوبیا چیتی - قارچ - روغن زیتون</p>
          </div>
          <span>1</span>
          <div className="food-price">60,000</div>
        </article>
      </main>

      <footer className="">Footer</footer>
    </div>
  );
}

export default App;
