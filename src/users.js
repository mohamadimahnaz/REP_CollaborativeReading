import React from 'react'
import './users.css';
import { Route, Link } from 'react-router-dom'
const User = ({ match }) => < p > { match.params.id } < /p>
class Users extends React.Component {
    render() {
        const { url } = this.props.match
        return ( <
            div className = "user-name" >
            <
            h1 > کاربران < /h1> <
            strong > انتخاب کاربران < /strong> <
            ul >
            <
            li >
            <
            Link to = "/users/980199613" > مهناز محمدی < /Link> < /
            li > <
            li >
            <
            Link to = "/users/98019913" > سحر زینی وند < /Link> < /
            li > <
            li >
            <
            Link to = "/users/9801995" >شتابی محمدپارسا < /Link> < /
            li > <
            /ul> <
            Route path = "/users/:id"
            component = { User }
            /> < /
            div >
        )
    }
}
export default Users
