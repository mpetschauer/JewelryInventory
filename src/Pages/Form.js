import {React, useState} from 'react'
import FormSelection from '../Components/FormSelection'
import JewelrySalesForm from '../Components/JewelrySalesForm.js'
import InventoryForm from '../Components/InventoryForm.js'

const Form = () => {

  let [selected, setSelected] = useState("")
  let [clicked, setClicked] = useState(false)
 

        
  const handleChange = (e) => {
    setSelected(e);
  };

  const handleClick = () => {
      setClicked(true)
  }
  if(!clicked)
  {
    return (
      
      
      <FormSelection
      handleChange={handleChange}
      handleClick={handleClick}
      selected = {selected}
      clicked = {clicked}
      />
    )
  }
  else{
   
    if(selected === "JewelrySalesForm")
    {
      return(
      <JewelrySalesForm/>
      )
    }
    else if(selected === "InventoryForm")
    {
      return(
      <InventoryForm/>
      )
    }   
  }
 
}

export default Form