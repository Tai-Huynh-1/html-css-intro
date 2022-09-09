// import { useState } from 'react';
import './App.css';
// import Form from './components/Form';
import Tag from "./components/common/Tag"
import CartItem2 from './components/CartItem2';
import Layout from './components/common/Layout';

function App() {
  // const [hideForm, setHideForm] = useState(false)

  // const formToggler = () => {
  //   setHideForm(prevState => !prevState)
  // }

  return (
    <div className="App">

      <Layout>
          <PageContainer>
            <div>
              <LeftSide />
              <RightSide />
            </div>
          </PageContainer>
          {/* <div className='w-full lg:w-7/12'>
              <CartItem2 /> 
          </div> */}
      </Layout>

    </div>
  );
}

export default App;
