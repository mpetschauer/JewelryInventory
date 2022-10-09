import React from 'react'

const InventoryTable = () => {

    const data = [
        { type: "Necklace", count: 63, price: "25.00", totalValue: "1275.00"},
        { type: "Bracelet", count: 29, price: "15.00", totalValue: "435.00" },
        { type: "Rings", count: 48, price: "10.00", totalValue: "480.00"},
        { type: "Earrings", count: 77, price: "15.00", totalValue: "1155.00"},
      ]

  return (
    
    <div className = 'App' Style="text-align: center">
        <span>
            <h1>Current Inventory</h1>
            <br/>
            <table>
                <tr Style="border-bottom: 1px solid black">
                <th>Type</th>
                <th>Count</th>
                <th>Price</th>
                <th>Total Value</th>
                </tr>
                {data.map ((val, key) => {
                return(
                <tr key = {key}>
                <td>{val.type}</td>
                <td>{val.count}</td>
                <td>{val.price}</td>
                <td>{val.totalValue}</td>
                </tr>
                )
                })}
            </table>
        </span>
    </div>
  )
}

export default InventoryTable