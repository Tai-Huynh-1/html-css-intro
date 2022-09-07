// import { useState } from 'react';
import './App.css';
// import Form from './components/Form';
import Tag from "./components/common/Tag"
import CartItem2 from './components/CartItem2';

function App() {
  // const [hideForm, setHideForm] = useState(false)

  // const formToggler = () => {
  //   setHideForm(prevState => !prevState)
  // }

  return (
    <div className="App">
      {/* {!hideForm && <Form title="Register" />}   */}
      {/* <Form title="Login" />   */}
      {/* <button className='border border-black' onClick={formToggler}>Hide Form</button> */}
      <Tag /> 
      <div className='w-full lg:w-7/12'>
        <CartItem2 /> 
      </div>    
    </div>
  );
}

export default App;
