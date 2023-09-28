const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_test_y9Eb2E2YaDEt19",
  key_secret: "A5m9L6bkrBfX7ehseKrMeBrO",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "INR",
  };

  const order = await instance.orders.create(option);
  res.json({
    order,
    success: true,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;

  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerification,
};
