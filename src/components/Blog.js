import React, { Component } from 'react'
import configureStore from "../dux/configureStore"
import {todoAdded} from "../dux/todos"
import {userAdded} from "../dux/users"
export default class Blog extends Component {
    
    render() {
        let Store = configureStore();
        Store.dispatch(todoAdded({
            description:'asdasdasd',
            resolved: false,
            createdBy: "Haseeb Ahmed",
            assigned:"none"
        }))
        Store.dispatch(userAdded({
        name: "Haseeb Ahmed",
        banned:"false",
        createdBy:"Admin",
        userRole: "undefined"
        }))
        return (
            <div>
               Blog Page 
            </div>
        )
    }
}

