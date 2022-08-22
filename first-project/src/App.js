import './App.css';
import { useState } from 'react';
import User from './components/User';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap"
import Colors from './components/Colors';
import Form from './components/Form';
import FormNew from './components/FormNew';

function App() {
  const [person, setPerson] = useState({name:"Nebil", surname:"Aggun"});
 const user ={
  name:"Nebil",
  city:"İstanbul",
  age:22,
 };
  return (
    <div >
      <Counter/>
      
<User data={user} friends={["ali","hasan"]}/>
<User data={user} friends={["ali","hasan"]}/>
<User data={user} friends={["ali","hasan"]}/>
   <div>
   <h1>person</h1>
{person.name} {person.surname}
<br/>
<Button color='success' onClick={()=> setPerson ({...person, name:"salih"})}>İsmi Değiştir</Button>
<Button color='warning' onClick={()=> setPerson ({...person, surname:"salih"})}>Soyismi Değiştir</Button>
  </div> 
  
  <br/>
  <br/>
  <Colors/>
  <br/>
  <Form/>
  <br/>
  <FormNew/> 
    </div>


  );
}

export default App;
