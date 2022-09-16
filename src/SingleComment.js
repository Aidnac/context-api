import React from "react";
import profile2 from './image/pic2.jfif'

const SingleComment = () =>{
    return (
		<div className='comment'>
			<a href="/" className='avatar'>
				<img src={profile2} alt="profile" />
			</a>
			<div className='content'>
				<a href="/" className='author'>
					Sarah
				</a>
				<div className='metadata'>
					<span className='date'>
						Today
					</span>
				</div>
				<div className='text'>
					The comment
				</div>
			</div>
		</div>
	)
}

export default SingleComment