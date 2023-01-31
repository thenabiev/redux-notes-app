import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { newNote } from '../redux/formSlice';
import {AiOutlineCheck} from 'react-icons/ai'

export const Form = () => {

const date=new Date()


const [title, setTitle]=useState('');
const [bg, setBg]=useState("#F57B38");
const [time, setTime]=useState(date.toLocaleDateString())
const dispatch=useDispatch();




const handleSubmit=(e)=>{
    e.preventDefault()

    title!=='' && dispatch(newNote({id:nanoid(), title:title, color:bg, date: time}));
    setTitle('')
    setBg("#F57B38")

}
  return (
    <form onSubmit={handleSubmit}>
        <textarea 
        value={title}
        className={''}
        onChange={(e)=>setTitle(e.target.value)}
        type="text" 
        placeholder='Add new note...'
        autoFocus/>
        <br /><br />
        <div className="between">
        <div className="colors">
            <div
            onClick={()=>setBg("#F57B38")}
            style={{backgroundColor:"#F57B38"}} 
            className="color">
                {bg==="#F57B38" &&  <AiOutlineCheck />}
            </div>
            <div
            onClick={()=>setBg("#8C9FFF")}
            style={{backgroundColor:"#8C9FFF"}} 
            className="color">
                {bg==="#8C9FFF" && <AiOutlineCheck />}
            </div>
            <div
            onClick={()=>setBg("#3FE6D3")}
            style={{backgroundColor:"#3FE6D3"}} 
            className="color">
                {bg==="#3FE6D3" && <AiOutlineCheck />}
            </div>
            <div
            onClick={()=>setBg("#99FC56")}
            style={{backgroundColor:"#99FC56"}} 
            className="color">
                {bg==="#99FC56" && <AiOutlineCheck />}
            </div>
            <div
            onClick={()=>setBg("#F5EB5E")}
            style={{backgroundColor:"#F5EB5E"}} 
            className="color">
                {bg==="#F5EB5E" && <AiOutlineCheck />}
            </div>
        </div>
        <button type="submit">Add</button>
        </div>
    </form>
  )
}
