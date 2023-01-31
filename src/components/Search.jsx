import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { searchNote } from '../redux/formSlice';

export const Search = () => {
    const dispatch=useDispatch();
   
  return (
    <div className='search'>
        <input 
        onChange={(e)=>dispatch(searchNote(e.target.value))} 
        placeholder='Search ... '
        type='text' />
        <HiOutlineSearch size='1.3rem' className='searchIcon'/>
    </div>
  )
}
