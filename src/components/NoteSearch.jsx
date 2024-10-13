import React, { Component } from "react";

class NoteSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
        };

        this.onFilteredTitle = this.onFilteredTitle.bind(this);
    }

    onFilteredTitle(event) {
        const searchQuery = event.target.value;
        this.setState({ searchQuery });
        this.props.onTitleSearchChangeEventHandler(searchQuery);
    }

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Cari catatan"
                    onChange={this.onFilteredTitle}
                    value={this.state.searchQuery}
                />
            </div>
        );
    }
}

export default NoteSearch;
