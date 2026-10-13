import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import { VerticalChart } from "./VerticalChart";

const Holdings = () => {
 let [allHolding , setAllHolding] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4001/allHolding")
    .then((res) => {
      console.log(res.data)
      setAllHolding(res.data)
    }).catch((err) => {console.log(err)})
  },[])

      const labels = allHolding.map((stock) => stock.name);
           
    const data = {
     labels,
     datasets : [
     {
       label: "Average cost",
       data: allHolding.map((stock) => Number(stock.avg) * Number(stock.qty)),
       backgroundColor: "rgba(148, 163, 184, 0.72)",
       borderColor: "#94a3b8",
       borderWidth: 1,
       borderRadius: 6,
       borderSkipped: false,
     },
     {
       label: "Current value",
       data: allHolding.map((stock) => Number(stock.price) * Number(stock.qty)),
       backgroundColor: allHolding.map((stock) =>
         Number(stock.price) >= Number(stock.avg) ? "rgba(16, 185, 129, 0.78)" : "rgba(239, 68, 68, 0.72)"
       ),
       borderColor: allHolding.map((stock) =>
         Number(stock.price) >= Number(stock.avg) ? "#10b981" : "#ef4444"
       ),
       borderWidth: 1,
       borderRadius: 6,
       borderSkipped: false,
     }
     ]
    }
      
    

 return(
  <>
  
    <h3 className="title">Holdings ({allHolding.length})</h3>
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Instrument</th><th>Qty.</th><th>Avg. cost</th><th>LTP</th>
            <th>Cur. val</th><th>P&amp;L</th><th>Net chg.</th><th>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {allHolding.map((stock) => {
            const currentValue = stock.price * stock.qty;
            const profit = currentValue - stock.avg * stock.qty;
            const profitClass = profit >= 0 ? "profit" : "loss";
            return (
              <tr key={stock.name}>
                <td>{stock.name}</td><td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td><td>{stock.price.toFixed(2)}</td>
                <td>{currentValue.toFixed(2)}</td>
                <td className={profitClass}>{profit.toFixed(2)}</td>
                <td className={profitClass}>{stock.net}</td>
                <td className={stock.isLoss ? "loss" : "profit"}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    {allHolding.length > 0 && (
      <section className="holdings-chart-card">
        <div className="holdings-chart-heading">
          <div>
            <p className="holdings-chart-eyebrow">PORTFOLIO OVERVIEW</p>
            <h4>Cost vs current value</h4>
          </div>
          <p className="holdings-chart-caption">Values shown in INR</p>
        </div>
        <div className="holdings-chart">
          <VerticalChart data={data}/>
        </div>
      </section>
    )}
  </>
)};

export default Holdings;
