import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const Positions = () => {
  let [positionData, setPositionData] = useState([])

  useEffect(() => {
    axios.get("https://zerodhaa-project.onrender.com/position")
    .then((res) => {
       setPositionData(res.data)
       console.log(res.data)
    }).catch((err) =>{console.log(err)})

},[])
return(
  <>
    <h3 className="title">Positions ({positionData.length})</h3>
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Product</th><th>Instrument</th><th>Qty.</th><th>Avg.</th>
            <th>LTP</th><th>P&amp;L</th><th>Chg.</th>
          </tr>
        </thead>
        <tbody>
          {positionData.map((stock) => {
            const profit = (stock.price - stock.avg) * stock.qty;
            return (
              <tr key={`${stock.product}-${stock.name}`}>
                <td>{stock.product}</td><td>{stock.name}</td><td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td><td>{stock.price.toFixed(2)}</td>
                <td className={profit >= 0 ? "profit" : "loss"}>{profit.toFixed(2)}</td>
                <td className={stock.isLoss ? "loss" : "profit"}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </>
)};

export default Positions;
