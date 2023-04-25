import { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import menu from "./data";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [menuData, setMenuData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filtredMenu = (category) => {
    if (category === "all") {
      setMenuData(menu);
      return true;
    } else {
      let filteredMenu = menu.filter((item) => item.category === category);
      setMenuData(filteredMenu);
    }
  };
  return (
    <section className="container">
      <h2 className="title">Our menu</h2>
      <Categories items={categories} clickHandler={filtredMenu}></Categories>
      <Menu items={menuData}></Menu>
    </section>
  );
}

export default App;
