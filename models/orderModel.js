const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },

    shippingInfo: {

      firstName: {
        type: String,
      },

      lastName: {
        type: String,
      },

      address: {
        type: String,
      },

      city: {
        type: String,
      },

      state: {
        type: String,
      },

      other: {
        type: String,
      },

      pincode: {
        type: Number,
      },
    },

    paymentInfo: {
      razorpayOrderId: {
        type: String,
        require: true,
      },

      razorpayPaymentId: {
        type: String,
        require: true,
      }
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
        price: {
          type: Number,
          require: true,
        }

      }
    ],
    paidAt: {
      type: Date,
      default: Date.now()
    },

    totalPrice: {
      type: Number,
      require: true,
    },
    totalPriceAfterDiscount: {
      type: Number,
      require: true,
    },

    orderStatus: {
      type: String,
      default: "Ordered"

    }

  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
