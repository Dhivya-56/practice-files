import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { info } from '../Reducers'
const Challenge = ({pages,setpage}) => {
       
    const selector=useSelector((e)=>e.task.value)
    console.log(selector)

    const dispatch=useDispatch()


    const[lang,setLang]=useState(selector)
    function handleGo(){
        setpage(pages-1)
    }
    function handleNxt(){
        dispatch(info(lang))
        setpage(pages+1)
    }
    console.log(lang)
    return (
        <div classnName="Challenge page">
            <h1>Challenge Preferences</h1>
            <p>Please tell us in which frontend Challenge you would like to participate in.</p>
            <div className="boards">
                <div className="board12">
                    <div className="board1" onClick={()=>setLang({...lang,HTMLCSS:1})} style={lang.HTMLCSS===1?{backgroundColor:'orange'}:{}}>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h3>HTML/CSS/JS</h3>
                        </div>
                    </div>
                    <div className="board2" onClick={()=>setLang({...lang,Reactjs:1})} style={lang.Reactjs===1?{backgroundColor:'orange'}:{}}>
                    <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>
                <div className="board34">
                    <div className='board3' onClick={()=>setLang({...lang,Vuejs:1})} style={lang.Vuejs===1?{backgroundColor:'orange'}:{}} >
                    <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h3>Vue.js</h3>
                        </div>
                    </div>
                    <div className="board4" onClick={()=>setLang({...lang,Angular:1})} style={lang.Angular===1?{backgroundColor:'orange'}:{}}>
                    <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h3>Angular</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
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

export default Challenge
