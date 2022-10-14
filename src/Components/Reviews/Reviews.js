
import useReviews from '../../hooks/useReviews';
import Footer from '../Footer/Footer';


import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [comments, setComments] = useReviews();
    
    return (
        <div>
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
        <div>
            <Footer/>
        </div>
        </div>
    );
};

export default Reviews;