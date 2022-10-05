import { useEffect, useState } from "react"

const useReviews = () => {
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setComments(data));
    }, []);    
    useEffect( () =>{
        const url = `reviews.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return [comments, setComments, reviews, setReviews];
}
export default useReviews;