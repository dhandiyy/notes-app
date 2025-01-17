import React, { Component } from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, createdAt, body, id, archived, onDeleteHandler, onArchiveHandler }) {
    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                createdAt={createdAt}
                body={body}
            />
            <NoteItemAction
                id={id}
                onDeleteHandler={onDeleteHandler}
                onArchiveHandler={onArchiveHandler}
                archived={archived}
            />
        </div>
    );
}
export default NoteItem;
