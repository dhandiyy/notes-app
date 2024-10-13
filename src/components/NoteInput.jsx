import React, { Component } from "react";

class NoteInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onMaxlimitInput = this.onMaxlimitInput.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onMaxlimitInput(event) {
        if (this.state.title.length >= 50 && event.key !== "Backspace" && event.key !== "Delete") {
            event.preventDefault();
        }
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        this.setState({
            title: "",
            body: "",
        });
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter: {50 - this.state.title.length}
                    </p>
                    <input
                        className="note-input__title"
                        type="text"
                        placeholder="Ini adalah judul ..."
                        onChange={this.onTitleChangeEventHandler}
                        onKeyDown={this.onMaxlimitInput}
                        value={this.state.title}
                        required
                    />
                    <textarea
                        className="note-input__body"
                        type="text"
                        placeholder="Tuliskan catatanmu di sini ..."
                        onChange={this.onBodyChangeEventHandler}
                        value={this.state.body}
                    ></textarea>

                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
