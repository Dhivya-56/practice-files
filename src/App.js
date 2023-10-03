import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import Skill from './Component/Skill';
import { useState } from 'react';
import Challenge from './Component/Challenge';
import Confirm from './Component/Confirm';
import Success from './Component/Success';
function App() {
  const[page,setPage]=useState(0)
  const circle=0;
  // function PageDisplay(){
  //   switch(page){
  //     case 0:
  //       return <Form pages={page} setpage={setPage}circle={circle}/>;
  //       break;
  //       case 1:
  //         return <Skill pages={page} setpage={setPage}cirlce={circle}/>;
  //         break;
  //       //  default:
  //       //   return <Form/>;
  //       //   break;
  //   }
  // }
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
      <div className='circle'>
                    <div>
                        <button type="button" className=" btn-circle btn-xl" style={page>=0?{backgroundColor:'orange',color:'white'}:{}}>1</button></div>
                    <div> <button type="button" className=" btn-circle btn-xl" style={page>=1?{backgroundColor:'orange',color:'white'}:{}}>2</button></div>
                    <div><button type="button" className=" btn-circle btn-xl" style={page>=2?{backgroundColor:'orange',color:'white'}:{}}>3</button></div>
                    <div> <button type="button" className=" btn-circle btn-xl" style={page>=3?{backgroundColor:'orange',color:'white'}:{}}>4</button></div>
                    <div> <button type="button" className=" btn-circle btn-xl" style={page>=4?{backgroundColor:'orange',color:'white'}:{}}>5</button></div>

                </div>
                <hr />
 {page===0?<Form  pages={page} setpage={setPage}circle={circle}/>:""}
 {page===1?<Skill  pages={page} setpage={setPage}cirlce={circle}/>:""}
 {page===2?<Challenge  pages={page} setpage={setPage}cirlce={circle}/>:""}
 {page===3?<Confirm  pages={page} setpage={setPage}cirlce={circle}/>:""}
 {page===4?<Success  pages={page} setpage={setPage}cirlce={circle}/>:""}
    </div>
  );
}

export default App;
