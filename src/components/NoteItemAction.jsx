import React, { Component } from "react";

function NoteItemAction({ onDeleteHandler, onArchiveHandler, id, archived }) {
    return (
        <div className="note-item__action">
            <button
                className="note-item__delete-button"
                onClick={() => onDeleteHandler(id)}
            >
                Delete
            </button>
            <button
                className="note-item__archive-button"
                onClick={() => onArchiveHandler(id)}
            >
                {archived === true ? "Pindahkan" : "Arsipkan"}
            </button>
        </div>
    );
}
export default NoteItemAction;
