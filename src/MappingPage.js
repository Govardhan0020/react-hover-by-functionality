import React, {useState} from 'react';

export default function MappingPage(props) {
  const RecData = props.Data;
  console.log(RecData , " heoo")
const[selectedItem,setSelectedItem] = useState(0)
const[data,setData] = useState("")
const sapplystyle ={
  backgroundColor:"Toyslblur",
  color:"white",
}

const Apply =(getindex) => {
  setSelectedItem(getindex)
} 

// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  return (
<div>
  <h4> Select the Itam </h4>
{
RecData.map((item,index) => 
<div className="mapdiv"> 
  <p onMouseOver={() => Apply(index)  }     
  className={selectedItem == index ? "Paraspply": "paradefault" }
  > {item.Name} </p>
   </div>
)
}

  </div>

  )
}
