import React, { useEffect } from "react";
import Script from "next/script";

const Index = () => {
  useEffect(() => {
    const paymentForm = document.getElementById("paymentForm");

    function payWithPaystack(e) {
      e.preventDefault();

      const handler = PaystackPop.setup({
        key: "pk_test_4b44a2eab590b32da2919b0d5b98d4283b51e21e", // Replace with your public key
        email: document.getElementById("email-address").value,
        amount: document.getElementById("amount").value * 100,
        ref: "" + Math.floor(Math.random() * 1000000000 + 1),
        onClose: function () {
          alert("Window closed.");
        },
        callback: function (response) {
          const message = "Payment complete! Reference: " + response.reference;
          alert(message);
        },
      });

      handler.openIframe();
    }

    if (paymentForm) {
      paymentForm.addEventListener("submit", payWithPaystack, false);
    }
  }, []);

  const handleScriptLoad = () => {
    // Script loaded, you can now use it
    console.log("Paystack script loaded");
  };

  return (
    <div className='w-full  bg-slate-900 h-screen flex justify-center items-center'>
      <h1 className='text-white text-center font-bold mr-20'>
        You will be Upgraded to a{" "}
        <span className='text-green-400'> Pro Plan </span>
      </h1>
      <div className='flex items-center justify-center bg-slate-900'>
        <div className='bg-black p-4 rounded shadow'>
          <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-96'>
            <form id='paymentForm'>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='text-white font-semibold mb-1 block'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email-address'
                  required
                  className='w-full p-2 bg-gray-700 rounded text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='amount'
                  className='text-white font-semibold mb-1 block'
                >
                  Amount
                </label>
                <input
                  type='tel'
                  id='amount'
                  required
                  className='w-full p-2 bg-gray-700 rounded text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='first-name'
                  className='text-white font-semibold mb-1 block'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='first-name'
                  className='w-full p-2 bg-gray-700 rounded text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='last-name'
                  className='text-white font-semibold mb-1 block'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='last-name'
                  className='w-full p-2 bg-gray-700 rounded text-white'
                />
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
                >
                  Pay
                </button>
              </div>
            </form>
          </div>

          <Script
            src='https://js.paystack.co/v1/inline.js'
            onLoad={handleScriptLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
