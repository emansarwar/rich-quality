import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, email, body, postId } = props.review;
    return (
        <div className='single-review'>
            <div className='name-email'>
                <h2 className='review-name'>NAME: {name}</h2>
                <h2 className='review-email'>email: {email}</h2>
            </div>
            <div>
                <h3 className='comments-title'>Comments</h3>
                <hr />
                <p className='review-comments'>{body}</p>
            </div>
            <div className='rating'>
                <h3>Rating: {postId}/5</h3>
            </div>
        </div>
    );
};

export default Review;