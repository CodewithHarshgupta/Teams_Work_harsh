import React from 'react';
import { FaStar } from 'react-icons/fa';
const Review = () => {
  // Sample reviews with ratings
  const reviews = [
    { id: 1, imgSrc: './img/r1.jpg', text: 'Outstanding service! The team at Kanthariya Technologies exceeded my expectations. Highly recommended!', rating: 5 },
    { id: 2, imgSrc: './img/r5.jpg', text: 'Impressive design and functionality. They truly understand the essence of our brand. Fantastic job!', rating: 4 },
    { id: 3, imgSrc: './img/r2.jpg', text: 'Great attention to detail. The website they created for us is not only beautiful but also user-friendly.', rating: 5 },
    { id: 4, imgSrc: './img/r6.jpg', text: 'Excellent support throughout the project. Kanthariya Technologies is a reliable partner for web design.', rating: 4 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`mr-1 ${i <= rating ? 'text-warning' : 'text-muted'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <div className="row justify-content-center">
        {reviews.map((review) => (
          <div key={review.id} className="col-md-3 head1">
            <div className="card border-0 shadow">
              <img src={review.imgSrc} className="card-img-top rounded-circle" alt={`Reviewer ${review.id}`} />
              <div className="card-body text-center">
                <p className="card-text">{review.text}</p>
                <div className="text-warning">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
