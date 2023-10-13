import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'services/api';

export const Review = () => {
  const { movieId } = useParams();
  const [reviewItems, setReviewItems] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchReviewItem = async () => {
      try {
        const revItems = await fetchReview(movieId);

        setReviewItems(revItems.results);
      } catch (error) {}
    };

    fetchReviewItem();
  }, [movieId]);

  return (
    <>
      {reviewItems !== null && (
        <ul>
          {reviewItems.map(reviewItem => (
            <li key={reviewItem.id}>
              <b>Author: {reviewItem.author}</b>
              <p>{reviewItem.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
