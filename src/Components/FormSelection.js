import {React, useState} from 'react'

    const FormSelection = ({selected, handleClick, handleChange}) => {

        return (
          <div Style="display: flex; justify-content: center;">
              <div className = "radio-container">
                <h3 Style="border-bottom: 1px solid black">Please select the type of form you wish to submit</h3>
                <label className = "radio-label">
                  <span Style="margin-right: 10px">Inventory Table</span>
                  <input type = "Radio" id= "InventoryForm" name="Choose" value="InventoryForm" checked={selected==="InventoryForm"} onChange = {(e) => handleChange(e.target.value)}/>
                </label>
                <br/>
                  <label className = "radio-label">
                    <span Style="margin-right: 10px">Jewelry Sales</span>
                    <input type = "Radio" id= "JewelrySalesForm" name="Choose" value="JewelrySalesForm" checked={selected==="JewelrySalesForm"} onChange  = {(e) => handleChange(e.target.value)}/>
                  </label>
                <br/>
      
                   <button onClick={handleClick} type="button" Style= "margin-top: 5px; margin-bottom: 7px;">Submit</button> 
              </div>
           </div>
        )
      }

export default FormSelection