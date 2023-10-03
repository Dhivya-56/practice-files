import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { info } from '../Reducers'
import { useDispatch } from 'react-redux'
const Form = ({pages,setpage,cirlce}) => {
    const selector=useSelector((e)=>e.task.value)
 
    const[details,setDetails]=useState(selector)
    const dispatch=useDispatch()
    function handleClick(){
      setpage(pages+1)
      dispatch(info(details))

    }
    console.log(selector)
    console.log(details)
     console.log(pages)
    return (
        <div className='Formpage'>
          
            <div className='form'>
               <h1>Personal Information</h1>
               <p>please provide your personal details so we can get to know you better</p>

                <div className="inputgroup">

                    <div className="form-floating">
                        <label for="floatingInputGroup1">FullName</label>
                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" value={details.name} onChange={(e)=>setDetails({...details,name:e.target.value})} />

                    </div>
                    <div className="form-floating">
                        <label for="floatingInputGroup1">Phone Number</label>
                        <input type="number" className="form-control" id="floatingInputGroup1" placeholder="Username" value={details.phno} onChange={(e)=>setDetails({...details,phno:e.target.value})}/>

                    </div>
                    <div className="form-floating">
                        <label for="floatingInputGroup1">Email</label>
                        <input type="email" className="form-control" id="floatingInputGroup1" placeholder="Username" value={details.email} onChange={(e)=>setDetails({...details,email:e.target.value})}/>

                    </div>
                    <div className="form-floating">
                        <label for="floatingInputGroup1">Portfolio/Github Link</label>
                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" value={details.git} onChange={(e)=>setDetails({...details,git:e.target.value})}/>

                    </div>

                </div>
                <hr/>
                <div className="button">
                <button type="button" className="buttn" onClick={handleClick}>Next step</button>
                </div>

            </div>
        </div >
    )
}

export default Form
