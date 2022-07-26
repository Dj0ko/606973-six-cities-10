import { reviews } from '../../mocks/reviews';
import CommentForm from '../comment-form/comment-form';

function Review(): JSX.Element {
  const [ review ] = reviews;

  const { comment, user: { avatarUrl, name }, date } = review;

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{date}</time>
          </div>
        </li>
      </ul>
      <CommentForm />
    </>
  );
}

export default Review;
