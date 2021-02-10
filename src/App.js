import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    render() {
        return ( <
            div id = "signUpContainer" >
            <
            h1 > LOG IN < /h1>  <
            SignUpHeader title = "SomethingCo" / >
            <

            SignUpForm / >
            <
            /
            div >
        )
    }
}




const SignUpHeader = props => ( <
    div id = 'signUpHeader' >
    <
    div id = 'signUpHeaderTitle' > { props.title } <
    /div> < /
    div >
);

const FormInput = props => ( <
    div className = 'signUpRow' >
    <
    input type = { props.type }
    placeholder = { props.placeholder }
    /> < /
    div >
);

const FormCheckBox = props => ( <
    div className = 'signUpRow' >
    <
    input id = { props.id }
    type = 'checkbox' / >
    <
    label htmlFor = { props.id } > { props.label } < /label> < /
    div >
);

const FormButton = props => ( <
    div className = 'signUpRow' >
    <
    button type = 'button' > { props.title } < /button> < /
    div >
);

const SignUpForm = props => ( <
    div id = 'signUpFormContainer' >
    <
    form id = "signUpForm" >
    <
    FormInput type = "text"
    placeholder = "email" / >
    <
    FormInput type = "password"
    placeholder = "password" / >
    <
    FormInput type = "password"
    placeholder = "confirm" / >
    <
    FormCheckBox id = "terms"
    label = "I agree to the terms and conditions" / >
    <
    FormButton title = "Sign Up" / >
    <
    FormButton title = " Login with Github " >

    <
    /FormButton>

    <
    /form> < /
    div >
);

ReactDOM.render( < App / > , document.getElementById('root'));
export default App
