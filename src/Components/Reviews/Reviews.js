
import useReviews from '../../hooks/useReviews';


import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [comments, setComments] = useReviews();
    
    return (
        <div>
            <h2 className='review-title'>REVIEW PAGE</h2>
            <div className='all-review'>
            {
                comments.map(review => <Review
                    key = {review.id}
                    review = {review}
                    />)
            }
            </div>
            
        </div>
    );
};

export default Reviews;