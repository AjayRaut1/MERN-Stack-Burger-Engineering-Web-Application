import React from "react";
import { Link } from "react-router-dom";

const Box = ({ title, value }) => (
  <div>
      <h3>
        {title === "Income" && "₹"}
        {value}
      </h3>
    <p>{title}</p>
  </div>
);

const DashBoard = () => {
  return (
    <section className="dashboard">
      <main>
        <article>
          <Box title={"Users"} value={213} />
          <Box title={"Orders"} value={21} />
          <Box title={"Income"} value={44000} />
        </article>
        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default DashBoard;
