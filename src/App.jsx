import * as React from 'react';

import Hook from '@components/ReactHook'
import Fragments from './components/Fragments';
import ReturnMap from './components/ReturnMap';
import ReactStrap from './components/ReactStrap';
import ReactBread from './components/ReactBread';
import DropDown from './components/DropDown';
import 'bootstrap/dist/css/bootstrap.css'


function App(){
  return (
      <div>
        <h1>My Hacker Stories </h1>
        <label htmlFor='search'>Search : </label>
        <input id = 'search' type='text' />
        <hr />
      {/*  <ReturnMap></ReturnMap>   */} 
        <Fragments></Fragments>
        <ReactStrap></ReactStrap> 
        <ReactBread></ReactBread>
        <DropDown></DropDown>
      </div>
  
  );
}

export default App;
