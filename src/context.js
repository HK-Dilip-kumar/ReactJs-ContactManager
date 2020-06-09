import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload,
                ...state.contacts]
            };
        default:
            return state;
    }
};
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: "1",
                name: "krishna",
                email: "krs@gmail.com",
                phone: "999-888",
            },
            {
                id: "2",
                name: "Arjun",
                email: "Ajn@gmai.com",
                phone: "368-666-777",
            },
            {
                id: "3",
                name: "Dilip",
                email: "Dil@gmai.com",
                phone: "765-343-777",
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;