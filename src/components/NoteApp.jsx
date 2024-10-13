import React, { Component } from "react";
import { getInitialData, showFormattedDate } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends Component {
    constructor(props) {
        super(props);
        const notes = getInitialData();
        this.state = {
            notes: notes.map((note) => ({
                ...note,
                createdAt: showFormattedDate(note.createdAt),
            })),
            filteredNotes: null,
            searchQuery: "",
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onTitleSearchChangeEventHandler = this.onTitleSearchChangeEventHandler.bind(this);
    }

    onDeleteHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.filter((note) => note.id !== id);
            const updatedFilteredNotes = prevState.filteredNotes
                ? prevState.filteredNotes.filter((note) => note.id !== id)
                : null;
            return { notes: updatedNotes, filteredNotes: updatedFilteredNotes };
        });
    }

    onAddHandler({ title, body }) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(new Date()),
        };

        this.setState((prevState) => {
            const updatedNotes = [...prevState.notes, newNote];
            const updatedFilteredNotes = prevState.searchQuery
                ? updatedNotes.filter((note) =>
                      note.title.toLowerCase().includes(prevState.searchQuery.toLowerCase())
                  )
                : null;
            return { notes: updatedNotes, filteredNotes: updatedFilteredNotes };
        });
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            );
            const updatedFilteredNotes = prevState.filteredNotes
                ? prevState.filteredNotes.map((note) =>
                      note.id === id ? { ...note, archived: !note.archived } : note
                  )
                : null;
            return { notes: updatedNotes, filteredNotes: updatedFilteredNotes };
        });
    }

    onTitleSearchChangeEventHandler(query) {
        if (query.trim() === "") {
            this.setState({ filteredNotes: null, searchQuery: "" });
        } else {
            const lowercaseQuery = query.toLowerCase();
            const filteredNotes = this.state.notes.filter((note) =>
                note.title.toLowerCase().includes(lowercaseQuery)
            );
            this.setState({ filteredNotes, searchQuery: lowercaseQuery });
        }
    }

    render() {
        const notesToRender =
            this.state.filteredNotes !== null ? this.state.filteredNotes : this.state.notes;

        return (
            <>
                <NoteHeader
                    onTitleSearchChangeEventHandler={this.onTitleSearchChangeEventHandler}
                />
                <NoteBody
                    notes={notesToRender}
                    onDeleteHandler={this.onDeleteHandler}
                    onAddHandler={this.onAddHandler}
                    onArchiveHandler={this.onArchiveHandler}
                />
            </>
        );
    }
}

export default NoteApp;