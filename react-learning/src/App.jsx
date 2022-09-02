import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Tag from "./components/common/Tag"
import { useState } from 'react';

function App() {
  const [hideForm, setHideForm] = useState(false)

  const formToggler = () => {
    setHideForm(prevState => !prevState)
  }

  return (
    <div className="App">
      {!hideForm && <Form title="Register" />}  
      {/* <Form title="Login" />   */}
      <button className='border border-black' onClick={formToggler}>Hide Form</button>
      <Tag />      
    </div>
  );
}

export default App;
