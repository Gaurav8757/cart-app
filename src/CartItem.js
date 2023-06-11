import React from "react";
class CartItem extends React.Component {
  testing() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 5000);
    });
    promise.then(() => {
      // setState acts like async call
      this.setState({ qty: this.state.qty + 1 });
      console.log("state", this.state);
    });
  }
  increaseQuantity = () => {
    //setState form 1 update valuue
    //   this.setState({
    //     qty: this.state.qty + 1,
    //   }, ()=>{

    // });
    // };
    // .....................................................................//
    // setState form 2 - if prevState required use this
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty + 1,
        };
      },
      () => {
        console.log("this.state", this.state);
      }
    );
  };
  //...........................Decrease QuantityState........................//
  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    // console.log("render");
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        {/* {this.props.jsx} */}
        <div className="left-block">
          <img style={styles.image} alt="img" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs{price}</div>
          <div style={{ color: "#777" }}> Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3914/3914248.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/10470/10470413.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3917/3917378.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
