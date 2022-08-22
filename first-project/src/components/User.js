import React from 'react'
function User({data,friends}) {
    console.log({data});
  return (
    <div>

        User
        <div>isim: {data.name}</div>
        <div>Yaş: {data.age}</div>
        <div>Şehir: {data.city}</div>
        <h2>Aradaşlar</h2>
        {friends.map((friend,i)=>(
    <div key={i} > {friend}</div>
    ))}
      
<hr/>
        </div>
        );
}
export default User