import React from "react";

const Menu = ({items}) => {
  console.log(items);
  return (
    
    <div className="section-center">
      {items.map(item=>(<article className="menu-item" key={item.id}>
        <div className="img-container"> <img src={item.img} className="photo" /></div>
       
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>))}
      
    </div>
  );
};

export default Menu;
