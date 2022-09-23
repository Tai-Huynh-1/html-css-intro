import { useState } from 'react';
import './App.css';
// import Form from './components/Form';
import Tag from "./components/common/Tag"
import CartItem2 from './components/CartItem2';
import Layout from './components/common/Layout';
import DataContainer from './components/DataContainer';
import Bank from './components/Bank';
import Pizza from './components/Pizza';

// const ChildComponentA = ({counter, setCounter}) => {
//   return (<div>Counter from child component A: {counter}</div>)
// }

// const ChildComponentB = ({counter}) => {
//   return (<div>Counter from child component B: {counter}</div>)
// }

// const ParentComponent = () => {
//   const [counter, setCounter] = useState(1)
//   return (<div>
//     Counter from parent component: {counter}
//     <ChildComponentA counter={counter} setCounter={setCounter} />
//     <ChildComponentB counter={counter} setCounter={setCounter} />
//   </div>)
// }

// const Contacts = () => {
//   return <div>MY CONTACT COMPONENT</div>
// }

// const Chat = () => {
//   return <div>MY Chat COMPONENT</div>
// }


// const SplitPane = (props) => {
//   console.log('split pane props', props)
//   return (
//     <div className='flex justify-between'>
//       <div className='border border-black h-full w-5/12'>
//         {props.left}
//       </div>
//       <div className='border border-red-500 h-full w-5/12'>
//         {props.right}
//       </div>
//     </div>
//   )
// }



function App() {
  const [hide, setHide] = useState(false)
  const [counter, setCounter] = useState(1)

  const inc = () => {
    setCounter(counter + 1)
}

  const dec = () => {
      setCounter(counter - 1)
  }

  const formToggler = () => {
    setHide(prevState => !prevState)
  }


  return (
    <div className="App">

      <Layout>
          {/* <SplitPane left={<Contacts />} right={<Chat />} /> */}

          {!hide ? <DataContainer counter={counter} /> : null}
          {/* <button 
            className='p-4 rounded-md bg-emerald-500 w-4/12' 
            onClick={formToggler}
          >
              Hide Form
          </button>
          <button 
            className='p-4 rounded-md bg-emerald-500 w-4/12' 
            onClick={inc}
          >
              Increment
          </button>
          <button 
            className='p-4 rounded-md bg-emerald-500 w-4/12' 
            onClick={dec}
          >
              Decrement
          </button> */}


          <Bank />
          <Pizza />
          <CartItem2 /> 

          {/* <PageContainer>
              <LeftSide />
              <RightSide />
          </PageContainer> */}
          {/* <ParentComponent /> */}
          {/* <div className='w-full lg:w-7/12'>
              <CartItem2 /> 
          </div> */}
      </Layout>

    </div>
  );
}

export default App;
