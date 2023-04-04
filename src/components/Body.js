import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            className="searchBox"
            type="text"
            placeholder="Search ..."
          ></input>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              setListOfRestaurant(
                listOfRestaurant.filter((res) => res.data.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
