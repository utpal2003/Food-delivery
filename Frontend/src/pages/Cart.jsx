import React, { useContext, useState } from 'react';
import { StoreContext } from '../Contex/storecontext';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; // ✅ Added navigation

const Cart = () => {
  const { food_list, cartItem, removeFromcart, setCartItem } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const navigate = useNavigate(); // ✅ Used for redirect

  const totalAmount = food_list.reduce((total, item) => {
    return total + item.price * (cartItem[item._id] || 0);
  }, 0);

  const hasItems = Object.values(cartItem).some((qty) => qty > 0);
  const finalAmount = totalAmount - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'SAVE10') {
      const discountValue = totalAmount * 0.1;
      setDiscount(discountValue);
      setPromoSuccess('Promo code applied successfully! 🎉');
      setPromoError('');
    } else {
      setDiscount(0);
      setPromoSuccess('');
      setPromoError('Invalid promo code. Please try again.');
    }
  };

  const handleClearCart = () => {
    setCartItem({});
    setDiscount(0);
    setPromoCode('');
    setPromoError('');
    setPromoSuccess('');
  };

  return (
    <div className="flex justify-center p-6 bg-gray-50 min-h-screen font-sans">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg p-8 sm:p-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4 text-center sm:text-left">
          Your Shopping Cart
        </h2>

        {hasItems ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="hidden md:grid grid-cols-6 gap-4 px-4 py-3 bg-gray-100 rounded-md text-gray-600 font-semibold shadow-sm">
                  <p className="col-span-2">Product</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p className="col-span-2 text-right">Total</p>
                </div>

                {food_list.map((item) => {
                  const quantity = cartItem[item._id];
                  if (quantity > 0) {
                    return (
                      <div
                        key={item._id}
                        className="grid grid-cols-1 md:grid-cols-6 items-center gap-4 border-b py-4 px-2 md:px-4 hover:bg-gray-50 transition duration-200 rounded-md"
                      >
                        <div className="col-span-2 flex items-center">
                          <div className="w-20 h-20 overflow-hidden rounded-lg border border-gray-200 shadow-sm flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-4">
                            <p className="font-semibold text-gray-800 text-lg">{item.name}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 font-medium md:font-normal">
                          <span className="md:hidden font-semibold">Price: </span>${item.price.toFixed(2)}
                        </p>
                        <p className="text-gray-700 font-medium md:font-normal">
                          <span className="md:hidden font-semibold">Qty: </span>{quantity}
                        </p>
                        <div className="col-span-2 flex items-center justify-between mt-2 md:mt-0">
                          <p className="text-gray-900 font-bold text-lg">
                            <span className="md:hidden font-semibold">Subtotal: </span>${(item.price * quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromcart(item._id)}
                            className="text-red-500 hover:text-red-700 ml-4 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full p-1"
                            title="Remove from cart"
                          >
                            <MdDelete size={24} />
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Action buttons section */}
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t-2 border-gray-200 pt-6 space-y-4 sm:space-y-0">
                <button
                  onClick={() => navigate('/')}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Continue Shopping
                </button>

                <button
                  onClick={handleClearCart}
                  className="text-gray-500 hover:text-gray-700 transition font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between font-medium text-gray-700">
                    <span>Subtotal</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium text-gray-700">
                    <span>Discount</span>
                    <span className="text-green-600">- ${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium text-gray-700">
                    <span>Shipping</span>
                    <span className="text-gray-500">Free</span>
                  </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${finalAmount.toFixed(2)}</span>
                </div>

                <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md transform hover:scale-105">
                  Proceed to Checkout
                </button>
              </div>

              {/* Promo Code */}
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <label htmlFor="promo" className="block text-gray-700 font-bold mb-3">
                  Have a promo code?
                </label>

                <div className="w-full max-w-md mx-auto mt-6 px-2-">
                  <div className="flex flex-col sm:flex-row sm:items-center w-full">
                    <input
                      type="text"
                      id="promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full sm:flex-grow p-3 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter promo code"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none mt-2 sm:mt-0 font-semibold transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>


                {promoSuccess && (
                  <p className="text-green-600 text-sm mt-3 font-medium flex items-center">
                    ✅ {promoSuccess}
                  </p>
                )}
                {promoError && (
                  <p className="text-red-600 text-sm mt-3 font-medium flex items-center">
                    ❌ {promoError}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg sm:text-2xl mt-20 p-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p>Your cart is empty. 😔</p>
            <p className="mt-4 text-base">Start adding some delicious food to your cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
