import React from "react";
import logo from "./images/logo.png";
import hambugerImage from "./images/foods/Smoked-Hamburger.png";
import beansImage from "./images/foods/loobia.jpeg";
import "./App.css";
import Header from "./components/header/header";
import Food from "./components/food/food";

function App() {
  return (
    <div>
      <Header cafeName="Café Chi" instagram="cafechi1402" logo={logo} />
      <main className="menu-container">
        <Food
          name="همبرگر"
          count={20}
          price={120000}
          image={hambugerImage}
          description="150 گرم گوشت چرخ کرده + سبزیجات"
        />
        <Food
          name="خوراک لوبیا"
          count={10}
          price={60000}
          image={beansImage}
          description="لوبیا چیتی - قارچ - روغن زیتون"
        />
      </main>

      <footer className="">Footer</footer>
    </div>
  );
}

export default App;
