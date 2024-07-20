import React from 'react';
import Header from './LessonOne/Header'
import Item1 from './LessonOne/Item1'
import Box from './LessonOne/Box'
import './LessonOne/index.css'
// import Header from './Header';
// import Content from './Content';
import './index.css';
function App() {
  return (
    <div className="flex j-center a-center main">
      <div className='flex gap'>
        <div className=' flex flex-col gap'>
          <div className='flex gap'>
            {/* <Item1/> */}
            <Box title= {"Assignment"} height= "120px" width= "120px" color= "green"/>
            <Box title= {"GST 101"} height= "120px" width="120px" />
          </div>
          <div className='flex flex-col gap'>
            <Box title= {"ECO 101"}  height= "120px"  width=''/>
            <Box title= {"CSC 101"}  height= "120px"/>
          </div>
        </div>
        <div>
          <Box title= {"MTH 101"}  height= "100%" width="240px"/>
        </div>
      </div>
    </div>
  );
}

export default App;
