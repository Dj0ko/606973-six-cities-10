import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import CommentForm from '../comment-form/comment-form';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList(): JSX.Element {
  const { reviews, authorizationStatus } = useAppSelector((state) => state);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem {...review} key={review.id}/>)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm /> : null}
    </>
  );
}

export default ReviewsList;
