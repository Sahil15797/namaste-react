import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId } = resData.data;
  return (
    <div className="res-card">
      <img
        className="cuisine-img"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="res-details">
        <div class="res-name">{name}</div>
        <div className="cuisines-list">{cuisines.join(",")}</div>
        <div className="res-cost">
          <div className="rating-badge">{avgRating}</div>
          <div>•</div>
          <div>{deliveryTime} MIN</div>
          <div>•</div>
          <div>₹{costForTwo / 100} FOR TWO</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
