import React from "react";

class TodoList extends React.Component{
    render(){
        return(
            <div className="ui list">
                <p className="item">Plan family trip</p>
                <p className="item">Go shopping for dinner</p>
                <p className="item">Go for a walk</p>
            </div>
        )
    }
}

export default TodoList