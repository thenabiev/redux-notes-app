import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/formSlice';
import {HiOutlineTrash} from "react-icons/hi"

export const NoteList = () => {
    const notes=useSelector(state=>state.notes.notes);
    const searchTerm=useSelector(state=>state.notes.searchTerm);
    const filteredArray=[];
    
        notes.map(note=>{
            if(
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
            ){
                filteredArray.push(note)
            }
        })
    

    
    const dispatch=useDispatch()
  return (
    <div className='noteList'>
        {
            filteredArray.map(note=>(
                <div 
                key={note.id}
                style={{border:`1px solid ${note.color}`}}
                className='note'>
                    <p>{note.title}</p>


                    <div className="between">
                    <p>{note.date}</p>
                    <HiOutlineTrash 
                    className='pointer'
                    size='1.3rem'
                    onClick={()=>dispatch(deleteNote(note))}
                    />
                    </div>
                </div>
            ))
        }
    </div>
  )
}
