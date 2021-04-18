import { Component } from "react";
import PropTypes from "prop-types";
import API from "../../services/api";
import Spinner from "../../components/Loader/Loader";

class ReviewsPage extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const movie_id = this.props.match.params.movieId;
      const response = await API.searchMovieReviews(movie_id);
      this.setState({ reviews: response.data.results });
    } catch (error) {
      this.setState({ error: error });
    }
  }
  render() {
    const { reviews, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spinner />}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <div> Author: {review.author}</div>
                <div>{review.content}</div>
                <a href={review.url}>{review.url}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Reviews</p>
        )}
      </>
    );
  }
}

ReviewsPage.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default ReviewsPage;
