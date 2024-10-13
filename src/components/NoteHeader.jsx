import React, { Component } from 'react';
import NoteSearch from './NoteSearch';

function NoteHeader({onTitleSearchChangeEventHandler}){
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch onTitleSearchChangeEventHandler={onTitleSearchChangeEventHandler}/>
        </div>
    );

}
export default NoteHeader;

