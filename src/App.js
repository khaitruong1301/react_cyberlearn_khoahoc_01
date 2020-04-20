import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Header from './component/Demo/Header';
// import HeaderRFC from './component/Demo/HeaderRFC';
// import BaiTapChiaLayout from './component/BaiTapChiaLayout/BaiTapChiaLayout';
// import Home from './component/BaiTapChiaLayout/Home';
// import BaiTapThucHanhLayout from './component/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingRFC from './DataBinding/DataBindingRFC';

function App() {


  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      <DataBinding />
      <hr />
      <DataBindingRFC />
    </div>
  );
}

export default App;
