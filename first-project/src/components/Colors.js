import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap'
function Colors() {
    const [colors, setColors]=useState(["kırmızı","beyaz","siyah"]);
    const handleClick=()=>{
        setColors([...colors, Math.random()]);
    }
  return (

    <div>Colors
        <br></br>
        {colors.map((color,i) =>(
        <div key={i}>{color}</div>
        ))};
<Button color="warning" onClick={handleClick} >Ekle</Button>

    </div>
  )
}

export default Colors