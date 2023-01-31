import { createSlice } from "@reduxjs/toolkit";



const initialState={
    notes:[],
    searchTerm:''
}

export const formSlice=createSlice({
    name:'note',
    initialState,
    reducers:{
        newNote: (state, action)=>{
            state.notes.push(action.payload);
        },
        deleteNote: (state, action)=>{
            const newNotes=state.notes.filter(note=>note.id!==action.payload.id);
            state.notes=newNotes;
        },
        searchNote:(state, action)=>{
           
            state.searchTerm=action.payload
            
        }
        
    }
    
});



export const {newNote, deleteNote, searchNote}=formSlice.actions
export default formSlice.reducer;