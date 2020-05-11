import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './State/StateDemo';
import Styling from './Styling/Styling';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';

// import Header from './component/Demo/Header';
// import HeaderRFC from './component/Demo/HeaderRFC';
import BaiTapChiaLayout from './component/BaiTapChiaLayout/BaiTapChiaLayout';
// import Home from './component/BaiTapChiaLayout/Home';
import BaiTapThucHanhLayout from './component/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import RenderWithLoop from './RenderWithLoop/RenderWithLoop';
// import DataBinding from './DataBinding/DataBinding';
// import DataBindingRFC from './DataBinding/DataBindingRFC';

function App() {


  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      {/* <DataBinding /> */}
      {/* <hr /> */}
      {/* <DataBindingRFC /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <Styling /> */}
      {/* <BaiTapChonXe /> */}
      <RenderWithLoop />
    </div>
    
  );
}

export default App;
