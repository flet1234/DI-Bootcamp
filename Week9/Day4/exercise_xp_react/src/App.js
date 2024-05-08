import { BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorBoundary from './componnents/ErrorBoundary'
import ColorSchemesExample from "./componnents/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopScreen from "./componnents/ShopScreen";
import HomeScreen from "./componnents/HomeScreen";
import ProfileScreen from "./componnents/ProfileScreen";
import PostList from "./componnents/PostList";
import Example1 from "./componnents/Example1";
import Example2 from "./componnents/Example2";
import Example3 from "./componnents/Example3";
import { useState } from "react";


function App() {
  const [response,setResponse]=useState()

  const postData = async()=>{
    const res = await fetch ('https://webhook.site/d8092a8e-4f71-4403-aa17-0142144eb7fa',{
      method:'POST',
      headers:{
        'Content-type':'Application/json'
      },
      body:JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    })
    const data = await res
    console.log(data);
  }

  return (
    <>
      <BrowserRouter>
      <ColorSchemesExample/>
        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}/>
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}/>
          <Route path="/shop"  element={<ErrorBoundary><ShopScreen/></ErrorBoundary>}/>
        </Routes>
      </BrowserRouter>
      <PostList/>
      <Example1/>
      <Example2/>
      <Example3/>
      <button onClick={(e)=>postData()}>Press to post some data</button>
    </>
  );
}

export default App;
