import React from 'react';
import useReviews from '../../hooks/useReviews';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = reviews.slice(0, 3);
    // let txt = "";
    // for (let x in reviews) {
    //     txt += reviews[x] + "<br>";
    // }
    // const selected = reviews.slice(3);
    // const { name, email, body, postId } = props.review;
    return (
        <div className='main-home'>
            <div className='img-title'>
                <div className='home-text'>
                    <div className='title'>
                        <h1>FASHION FOR YOU</h1>
                    </div>
                    <div className='p-align'>
                        <h3>Rich quality is a quality brand which established for quality cloth. We importance to consumer's desired fashion and their dignity. It's big mart is in Dhaka, Chattogram and Sylhet. It also have so many sub-mart in several regional places. Our priority is to fulfil customer satisfaction.</h3>
                    </div>
                    <div>
                        <button className='button-demo'><bold>DEMO CLOTH</bold></button>
                    </div>
                </div>
                <div>
                    <img className='home-img' src='https://qph.cf2.quoracdn.net/main-qimg-41967f02e25e44d3b79e773794f853c8-lq' alt='' />
                </div>
            </div>
            <hr />
            <div>
                <h2 className='home-review-title'>OUR SERVICES</h2>
            <div className='home-review'>
                {

                    homeReviews.map(review => <Review
                        key={review.id}
                        review={review}
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

export default Home;