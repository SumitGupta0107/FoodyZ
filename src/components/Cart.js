import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice.js";
//import FoodItem from "./FoodItem.js";
import { MENU_ITEM_IMG_CDN_URL } from "./config.js";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.price);
  //console.log(totalPrice);
  const handleClearCart = () => {
    dispatch(clearCart());
  };



  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="restaurant-menu">
      {cartItems.length === 0 ? (
        <div className="nDVxx _340-t">
          <div className="_10-lm">
            <div className="_3a391"></div>
            <div className="_3Y9ZP">Your cart is empty</div>
            <div className="d7jCU">
              You can go to home page to view more restaurants
            </div>
          </div>
        </div>
      ) : (
        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Cart Contains</h3>
            </div>
            <div className="menu-items-list">
              {cartItems.map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.imageId && (
                      <img
                        className="menu-item-img"
                        src={MENU_ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <button
                      className="remove-btn"
                      onClick={() => {
                        handleRemoveItem(item);
                      }}
                    >
                      {" "}
                      Remove{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="ZBf6d">
        <div>TO PAY</div>
        <div className="_3ZAW1">{new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(totalPrice)}</div>
        </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Cart;

/* 
<button className="total-val">Total</button>
      </>

      /*<p className="menu-count">Cart Contains {cartItems.length} ITEMS</p>*/
