import React, { Component, useReducer, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Functionclick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ChildComponent from './components/ChildComponent'
import ParentComponet from './components/ParentComponent'
import Conditional from './components/Conditional';
import ListRendering from './components/ListRendering'
import Keyarray from './components/KeyArray'
import Styling from './components/Styling';
import Inline from './components/Inline';
import Form from './components/Form';
import UseReducer from './components/UseReducer';
import Lifecycle from './components/Lifecycle';
import Fragments from './components/Fragments';
import RefDemo from './components/RefDemo';
import Portals from './components/Portals';
import CounterClick from './components/CounterClick';
import CounterRender from './components/CounterRender';
import RenderFunction from './components/RenderFunction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterRender></CounterRender>
        <RenderFunction name={(IsLoggedIn) => IsLoggedIn ? 'Neha' : ' Guest'}></RenderFunction>
        {/* <Portals></Portals> */}
        {/* <RefDemo/> */}
        {/* <Fragments></Fragments> */}
        {/* <Lifecycle></Lifecycle> */}
        {/* <UseReducer/> */}


        {/* <Styling primary={true}/>  */}
        {/* <Mycomponent name="Sanjida" place="Assam">
          <p>this is children props</p>
        </Mycomponent>
        <Mycomponent name="Pari" place="Delhi">
          <p>this is children props</p>
        </Mycomponent>
        <Mycomponent name="Harsh" place="Thane">
          <p>this is children props</p>
        </Mycomponent>
        <Welcome name="Neha" place="Ahmedabad"></Welcome> */}


      </div>
    );
  }
}

export default App;
