import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {Button} from 'reactstrap';
function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
    useEffect(()=>{
        console.log("bir state değişti.");
    });
    useEffect(()=>{

        console.log("bir compenent mount edildi.");
    }, []);
    useEffect(()=>{

        console.log("count değeri değişti");
    }, [count]);
    return (
        <div>
            <h1>{count}</h1>
            <br />
            <Button onClick={() => setCount(count + amount)}>Arttır</Button>
            <br />
            <Button color="primary" onClick={() => setAmount(3)}>+3</Button>
            <Button color='info' onClick={() => setAmount(5)}>+5</Button>
            <Button color='danger' onClick={() => setAmount(10)}>+10</Button>
        </div>
    );
}

export default Counter