import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {info } from '../Reducers'
import { useState } from 'react'
const Skill = ({pages,setpage,circle}) => {
   
    const selector=useSelector((e)=>e.task.value)
    const dispatch=useDispatch()

    console.log(selector)
    const[plan,setPlan]=useState(selector)
  
    function handleGo(){
        setpage(pages-1)
    }
    function handleNxt(){
       dispatch(info(plan))
setpage(pages+1)
    }
  
   console.log(plan)
    return (
        <div classnName="Skills page">
            <h1>Skill Level</h1>
            <p>Please tell us about your skill level in frontend development.</p>
            <div className="cards">
                <div className="card12">
                    <div className="card1" onClick={()=>setPlan({...plan,Beginner:true})} style={plan.Beginner===true?{backgroundColor:'orange'}:{}}>
                        <h3>Beginner</h3>
                    </div>
                    <div className="card2" onClick={()=>setPlan({...plan,Beginner:false, Intermediate:true,  Advanced:false,Expert:false})} style={plan.Intermediate===true?{backgroundColor:'orange'}:{}}>
                        <h3>Intermediate</h3>
                    </div>
                </div>
                <div className="card34">
                    <div className='card3' onClick={()=>setPlan({...plan,Beginner:false,Intermediate:false,Advanced:true,Expert:false})} style={plan.Advanced===true?{backgroundColor:'orange'}:{}}>
                        <h3>Advanced</h3>
                    </div>
                    <div className="card4" onClick={()=>setPlan({...plan,Beginner:false,Intermediate:false,Advanced:false,Expert:true})} style={plan.Expert===true?{backgroundColor:'orange'}:{}}>
                        <h3>Expert</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='gonext'>
                <div className="go">
                <button type="button" className="buttn" onClick={handleGo}>Go Back</button> 
                </div>
                <div className="next">
                <button type="button" className="buttn" onClick={handleNxt}>Next Step</button> 
                </div>
            </div>
        </div>
    )
}

export default Skill
