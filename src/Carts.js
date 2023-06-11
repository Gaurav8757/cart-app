import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
        },
        {
          price: 990,
          title: "Watch",
          qty: 4,
          img: "",
          id: 2,
        },
        {
          price: 2900,
          title: "iPhone",
          qty: 2,
          img: "",
          id: 3,
        },
      ],
    };
    //this.testing();
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={99} title={"Watch"} img={""} /> */}
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              // func={() => console.log("sdsf")}
              // isloggedin={false}
              // jsx={<h1>Test</h1>}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
