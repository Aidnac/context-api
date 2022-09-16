import React from "react";
import ReactDOM from "react-dom";
import SingleComment from './SingleComment'
import profile1 from './image/pic1.jfif'
import profile2 from './image/pic2.jfif'
import profile3 from './image/pic3.jfif'
import UserCard from "./UserCard";

const App = () =>{
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment 
                    name='Alex' 
                    date='Today at 5:00 PM'
                    text='it is amazing'
                    picture={profile1}
                />
            </UserCard>
            
            <UserCard>
                <SingleComment 
                    name='Sarah' 
                    date='Today at 6:00 PM'
                    text='Great job'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Jack' 
                    date='Today at 7:00 PM'
                    text='Thanks'
                    picture={profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)