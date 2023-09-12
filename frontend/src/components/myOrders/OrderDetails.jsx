import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Ajay"}
          </p>
          <p>
            <b>Phone</b>
            {2131232123}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-02-2020"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-02-2020"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2020"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{2132}
          </p>
          <p>
            <b>Shipping Charges</b>₹{200}
          </p>
          <p>
            <b>Tax</b>₹{232}
          </p>
          <p>
            <b>Total Amount</b>₹{232 + 200 + 2132}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>

          <div>
            <h4>VEG CHEESE BURGER</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>

          <div>
            <h4>JUMBO VEG CHEESE BURGER</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>

          <div>
            <h4>VEG CHEESE BURGER WITH FRENCH FRIES</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>

            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
