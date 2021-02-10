import React from 'react'
import ReactDOM from 'react-dom'
import './Home.css';


class Home extends React.Component {
    render() {
        return ( < div >
            <
            Cardup / >

            <
            /
            div >
        )
    }
}

function Cardup(params) {
    return ( < div className = "main" >
        <
        div className = "row1" > < div className = "Rightcard" >
        <
        div className = "header-right" > < span > ترجمه < /span></div >
        <
        div className = "body-right" > < span > منظور از همکاری چیست؟ مشارکتی صفتی است که تلاشی را توصیف می کند که افراد در آن با هم کار می کنند(یعنی روشی که در آن با هم همکاری می کنند).از مشارکت اغلب در یک زمینه مثبت استفاده می شود تا به دو یا چند طرف که با موفقیت روی یک هدف یا پروژه مشترک کار می کنند اشاره کند. < /span > < /
        div > < /div>

        <
        div className = "Leftcard" >
        <
        div className = "header-left" > < span > متن اصلی < /span></div >
        <
        div className = "body-left" > < span >
        <
        p > What means collaborative ? < /p>
        Collaborative is an adjective that describes an effort in which people work together(that is, one in which they collaborate).Collaborative is often used in a positive context to refer to two or more parties successfully working together on a goal or shared project. < /span>  < /
        div > < /div> < /
        div >

        <
        div >
        <
        textarea className = "row2" > < /textarea> <
        button type = "button"
        className = "btn" > ذخیره < /button > < /
        div > < /
        div >

    )

}



ReactDOM.render( <
    Home / > ,
    document.getElementById('root')
);
export default Home
