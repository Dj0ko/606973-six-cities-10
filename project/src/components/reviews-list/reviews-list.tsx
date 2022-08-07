import { Review } from '../../types';
import CommentForm from '../comment-form/comment-form';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[]
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem {...review} key={review.id}/>)}
      </ul>
      <CommentForm />
    </>
  );
}

export default ReviewsList;
