import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("https://zerodhaa-project.onrender.com/order");
        if (active) setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        if (active) setError("Orders load nahi ho sake. Backend connection check karein.");
        console.error("Orders fetch failed:", err.response?.data || err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchOrders();
    return () => {
      active = false;
    };
  }, []);

  const buyCount = orders.filter((order) => String(order.mode).toLowerCase() === "buy").length;
  const sellCount = orders.length - buyCount;
  const totalValue = orders.reduce(
    (sum, order) => sum + Number(order.qty || 0) * Number(order.price || 0),
    0
  );
  const formatAmount = (amount) =>
    `Rs. ${Number(amount).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <section className="orders-page">
      <div className="orders-heading">
        <div>
          <p className="orders-eyebrow">YOUR TRADING ACTIVITY</p>
          <h2 className="title">Orders</h2>
          <p className="orders-subtitle">Review your recent buy and sell orders.</p>
        </div>
        <Link to="/" className="orders-action">Explore stocks</Link>
      </div>

      {!loading && !error && orders.length > 0 && (
        <div className="orders-summary">
          <article className="orders-summary-card">
            <span className="orders-summary-icon orders-icon-total">#</span>
            <div><p>Total orders</p><strong>{orders.length}</strong></div>
          </article>
          <article className="orders-summary-card">
            <span className="orders-summary-icon orders-icon-buy">B</span>
            <div><p>Buy orders</p><strong>{buyCount}</strong></div>
          </article>
          <article className="orders-summary-card">
            <span className="orders-summary-icon orders-icon-sell">S</span>
            <div><p>Sell orders</p><strong>{sellCount}</strong></div>
          </article>
          <article className="orders-summary-card orders-summary-value">
            <span className="orders-summary-icon orders-icon-value">Rs</span>
            <div><p>Total order value</p><strong>{formatAmount(totalValue)}</strong></div>
          </article>
        </div>
      )}

      {loading ? (
        <div className="orders-state">Loading your orders...</div>
      ) : error ? (
        <div className="orders-state orders-error">{error}</div>
      ) : orders.length === 0 ? (
        <div className="orders-empty">
          <div className="orders-empty-mark">+</div>
          <h3>No orders yet</h3>
          <p>Your buy and sell orders will appear here.</p>
          <Link to="/" className="orders-action">Browse watchlist</Link>
        </div>
      ) : (
        <div className="orders-table-wrap">
          <div className="orders-table-heading">
            <div><h3>Order book</h3><p>{orders.length} orders recorded</p></div>
            <span className="orders-live-label"><i /> All orders</span>
          </div>
          <table className="orders-table">
            <thead>
              <tr><th>Instrument</th><th>Type</th><th>Quantity</th><th>Price</th><th>Value</th></tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="orders-instrument"><span className="orders-symbol-mark">{String(order.name || "?").slice(0, 1).toUpperCase()}</span>{order.name}</td>
                  <td><span className={`order-side ${String(order.mode).toLowerCase() === "buy" ? "order-buy" : "order-sell"}`}>
                    {String(order.mode || "").toUpperCase()}
                  </span></td>
                  <td>{order.qty}</td>
                  <td>{formatAmount(order.price || 0)}</td>
                  <td className="orders-value-cell">{formatAmount(Number(order.qty || 0) * Number(order.price || 0))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Orders;
