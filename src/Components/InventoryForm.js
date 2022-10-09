import React from 'react'

const InventoryForm = () => {
    
  return (
    
    <head className = "form-container">
        <h3>Inventory Update Form</h3>
        <br/>
        <div className= "form-row">
            <label className="form-label" for="test">Rings</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
            <label className="form-label" for="test">Necklaces</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
        </div>
        <div className= "form-row">
            <label className="form-label" for="test">Bracelets</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
            <label className="form-label" for="test">Earrings</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
        </div>
        <div className= "form-row">
            <label className="form-label" for="test">Hair Clips</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
            <label className="form-label" for="test">Key Chains</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
        </div>
        <div className= "form-row">
            <label className="form-label" for="test">Inventory Table</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
            <label className="form-label" for="test">Inventory Table</label>
            <input type ="Test" id= "RingCount" name="Rings:"/>
        </div>

        <br/>
        <button className="form-button">Submit</button> 
        <button className="form-button">Back</button> 
           
    </head>

  )
}

export default InventoryForm