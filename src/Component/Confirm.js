import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { info } from '../Reducers'
const Confirm = ({ pages, setpage }) => {
  const selector = useSelector((e) => e.task.value)
  console.log(selector)

  // const[final,setFinal] = useState(selector)
  // const dispatch=useDispatch()
  function handleGo() {
    setpage(pages - 1)
  }
  function handleNxt() {
    setpage(pages + 1)

  }
  const cardsss = Object.keys(selector).filter((value) => selector[value] === true)
  const lag = Object.keys(selector).filter((item) => selector[item] === 1)
  //  console.log(final)

  return (
    <div className="confirm page">
      <h1>Review and Confirm</h1>
      <p>Please review your information to make sure everything is accurate</p>
      <div className='data123'>
        <div className="data1">

          <div><label for="floatingInput">Full Name</label></div>
          <div>{selector.name}</div>
        </div>
        <div className="data2">

          <div><label for="floatingInput">Email Address</label></div>
          <div>{selector.email}</div>
        </div>
        <div className="data3">

          <div><label for="floatingInput">Phone Number</label></div>
          <div>{selector.phno}</div>
        </div>
      </div>
      <div className='data456'>
        <div className="data4">

          <div><label for="floatingInput">Portfolio/git</label></div>
          <div>{selector.git}</div>
        </div>
        <div className="data5">

          <div><label for="floatingInput">Skill level</label></div>
          <div>{cardsss}</div>
        </div>
        <div className="data6">

          <div>
            <label for="floatingInput">Challenge preference</label>
          </div>
          <div>{lag.map((item1, index) => (
            <li key={index}>{item1}</li>
          ))}</div>
        </div>
      </div>
      <div className='gonext'>
        <div className="go">
          <button type="button" className="buttn" onClick={handleGo}>Go Back</button>
        </div>
        <div className="next">
          <button type="button" className="buttn" onClick={handleNxt}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
