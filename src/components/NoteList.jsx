import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteHandler, onArchiveHandler }) {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    onDeleteHandler={onDeleteHandler}
                    onArchiveHandler={onArchiveHandler}
                    {...note}
                />
            ))}
        </div>
    );
}
export default NoteList;
