import React from 'react'
import { useState } from 'react'


function Form() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("");

    return (
        <div>Form
            <br />
            <input placeholder='isim' value={name}
                onChange={(event) =>
                    setName(event.target.value)}>
            </input>
            <input placeholder='soyisim' value={surname}
                onChange={(event) =>
                    setSurname(event.target.value)}>
            </input>
            <div>
            <select value={gender}
                onChange={(event) =>
                    setGender(event.target.value)}>
                <option>Erkek</option>
                <option>Kadın</option>
            </select>
            </div>
            <div>
                <strong>{name} {surname} {gender}</strong>
            </div>
        </div>
    )
}

export default Form