import { useContext } from "react";
import "../styles/reviews.css";
import WebContext from "../context/WebContext";

const Reviews = () => {
  const reviews = [
    {
      image: "/restaurant-page/profile/1.jfif",
      review: (
        <span>
          "Every visit to <b>Rice & Spice</b> feels like a special occasion! The
          ambiance is cozy and inviting, and the staff is incredibly friendly.
          The <b>Biryani</b> is a must-try—it's bursting with flavor! Highly
          recommend this gem in Queeta!" ,
        </span>
      ),
      name: "Sophia M.",
    },
    {
      image: "/restaurant-page/profile/2.jfif",
      review: (
        <span>
          "I can’t say enough good things about <b>Rice & Spice</b>. The menu
          has something for everyone, and the quality of the ingredients is
          top-notch. I tried the <b>Roast</b>, and it was perfectly cooked. I’ll
          definitely be coming back for more!" ,
        </span>
      ),
      name: "Michael T.",
    },
    {
      image: "/restaurant-page/profile/3.jfif",
      review: (
        <span>
          "Absolutely love this restaurant! The atmosphere is lively, and the
          decor is beautiful. We enjoyed the Platter and were blown away by the
          presentation and taste. Don’t miss the <b>Chocolate ice-cream</b>—it’s
          a perfect end to the meal!" ,
        </span>
      ),
      name: "James H.",
    },
    {
      image: "/restaurant-page/profile/4.jfif",
      review: (
        <span>
          "I had a fantastic dining experience at <b>Rice & Spice</b>. The
          flavors are bold and authentic, and the service is excellent. The{" "}
          <b>Biryani</b> had the perfect balance of spices, and I loved the
          unique twist they added. Highly recommend this place!" ,
        </span>
      ),
      name: "David K.",
    },
    {
      image: "/restaurant-page/profile/5.jfif",
      review: (
        <span>
          "My new favorite spot! <b>Rice & Spice</b> combines great food with a
          friendly atmosphere. The staff is knowledgeable about the menu and
          helped us make excellent choices. The <b>kebabs</b> were fresh and
          flavorful. We will be back soon!" ,
        </span>
      ),
      name: "Nathan P.",
    },
    {
      image: "/restaurant-page/profile/6.jfif",
      review: (
        <span>
          "From the moment we walked in, we felt welcomed at <b>Rice & Spice</b>
          . The staff was attentive, and the food was simply divine. The{" "}
          <b>Qabuli Palao</b> was so good that I couldn’t stop raving about it
          to my friends. Can’t wait to come back!" ,
        </span>
      ),
      name: "Emma L.",
    },
  ];

  const { review } = useContext(WebContext);

  return (
    <>
      <div ref={review}></div>
      <div className="review-section">
        <div className="gallery-header headings text-color">Reviews</div>
        <div>
          <p className="before-review text-color">
            What our guests are saying?
          </p>
        </div>
        <div className="reviews">
          {Object.values(reviews).map((review) => (
            <div className="review">
              <div className="review-image">
                <img src={review.image} alt="reviewers" />
              </div>
              <div className="review-text">
                <p>
                  {" "}
                  <span className="italic">{review.review}</span>{" "}
                  <span>
                    <b> {review.name}</b>
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
