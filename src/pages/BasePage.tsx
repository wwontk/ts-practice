import React from 'react';

// import Clock from './2-4/Clock';
// import Composition from './2-5/Composition';
// import Extraction from './2-5/Extraction';
// import ClassClock from './2-6/ClassClock';
// import Event from './2-7/Event';
// import Greeting from './2-8/Greeting';
// import List from './2-9/List';
// import Controlled from './2-10/Controlled';
// import UnControlled from './2-10/UnControlled';
// import Calculator from './2-11/Calculator';
// import { Composite } from './2-12/Composite';
// import { Specialize } from './2-12/Specialize';
import { FilterableProductTable } from './2-13/FilterableProductTable';


function BasePage() {
  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/g/64/64'
  //   }
  // };
  return (
    <>
      <div>Hello React</div>
      <FilterableProductTable />
    </> 
  );
}

export default BasePage;
