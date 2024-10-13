import React, { Component } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notes, onDeleteHandler, onArchiveHandler, onAddHandler }) {
    const notesNonActive = notes.filter((note) => note.archived === true);
    const notesActive = notes.filter((note) => note.archived === false);

    return (
        <div className="note-app__body">
            <NoteInput addNotes={onAddHandler} />
            <h2>Catatan Aktif</h2>
            {notesActive.length > 0 ? (
                <NoteList
                    notes={notesActive}
                    onArchiveHandler={onArchiveHandler}
                    onDeleteHandler={onDeleteHandler}
                />
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
            <h2>Arsip</h2>
            {notesNonActive.length > 0 ? (
                <NoteList
                    notes={notesNonActive}
                    onArchiveHandler={onArchiveHandler}
                    onDeleteHandler={onDeleteHandler}
                />
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </div>
    );
}
export default NoteBody;
