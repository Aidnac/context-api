import React from "react";
import ReactDOM from "react-dom";
import profile2 from './image/pic2.jfif'

const App = () =>{
    return(
        <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile2} alt="profile picture"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sarah
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className="text">
                        it's amazing
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)