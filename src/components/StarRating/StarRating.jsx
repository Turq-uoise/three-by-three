import { useState, useEffect } from "react";
import { rate } from '../../utilities/threebythrees-api'
import * as threeByThreesAPI from "../../utilities/threebythrees-api"

export default function StarRating({id, user}) {
  const [hover, setHover] = useState(0);
  const [defaultRating, setDefaultRating] = useState(0)
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const checkRating = async () => {
      const threebythree = await threeByThreesAPI.getById(id)
      threebythree.rating.forEach((threebythreerating) => {
        if (threebythreerating.user === user._id) {
          setRating(threebythreerating.rating)
        }
      })
    }

    checkRating()
  }, [])

  useEffect(() => {
    const addRating = async () => {
      await rate({rating, id});
    }

    if (rating > 0) addRating()
  }, [rating])

  return (
    <div className="starRating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};