import React from 'react'
import {useState} from 'react'

function FormNew() {
    const [form, setForm]=useState({name:"", surname:"", gender:""});
    const handleChange= (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
  return (
    <div>FormNew
<br/>
<div>
<input 
placeholder='isim'
name="name"
value={form.name}
onChange={handleChange}>  
</input>

<input 
placeholder='soyisim'
name="surname"
value={form.surname}
onChange={handleChange}>  
</input>
</div>
<div>
<select 
name='gender'
value={form.gender}
onChange={handleChange}>
    <option value="erkek">Erkek</option>
    <option value="Kadın">Kadın</option>
</select>

</div>


<strong>{form.name} {form.surname} {form.gender}</strong>
    </div>
  )
}

export default FormNew