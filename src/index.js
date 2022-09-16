import React from "react";
import ReactDOM from "react-dom";
import SingleComment from './SingleComment'
import profile1 from './image/pic1.jfif'
import profile2 from './image/pic2.jfif'
import profile3 from './image/pic3.jfif'

const App = () =>{
    return(
        <div className='ol comments'>
            <SingleComment 
                name='Alex' 
                date='Today at 5:00 PM'
                text='it is amazing'
                picture={profile1}
            />
            <SingleComment 
                name='Sarah' 
                date='Today at 6:00 PM'
                text='Great job'
                picture={profile2}
            />
            <SingleComment 
                name='Jack' 
                date='Today at 7:00 PM'
                text='Thanks'
                picture={profile3}
            />
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)