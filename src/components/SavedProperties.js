import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import "../styles/SavedProperties.css";
// import Alert from "./Alert";

// eslint-disable-next-line no-unused-expressions

const SavedProperties = ({ userID, myProperties, setMyProperties }) => {
  const getFavourites = () => {
    return axios
      .get(
        `https://surrealestatedatabase.herokuapp.com/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing`
      )
      .then((results) => {
        setMyProperties(results.data.filter((e) => e.propertyListing));
      });
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const handleDeleteProperty = (favouriteId) => {
    axios
      .delete(
        `https://surrealestatedatabase.herokuapp.com/api/v1/Favourite/${favouriteId}`,
        {
          propertyListing: favouriteId,
          fbUserId: userID,
        }
      )
      .then(() => getFavourites());
  };

  return (
    <div className="saved-properties-page">
      <h1 className="header_saved-properties">Saved Properties</h1>
      <div className="saved-properties">
        {myProperties &&
          myProperties.map((property) => {
            return (
              <PropertyCard
                favouriteId={property._id}
                userID={userID}
                key={property.propertyListing._id}
                title={property.propertyListing.title}
                city={property.propertyListing.city}
                propertyId={property.propertyListing._id}
                type={property.propertyListing.type}
                bathrooms={property.propertyListing.bathrooms}
                bedrooms={property.propertyListing.bedrooms}
                price={property.propertyListing.price}
                email={property.propertyListing.email}
                onDeleteProperty={handleDeleteProperty}
                myProperties={myProperties}
              />
            );
          })}
      </div>
    </div>
  );
};

SavedProperties.defaultProps = {
  myProperties: undefined,
};

SavedProperties.propTypes = {
  userID: PropTypes.number.isRequired,
  myProperties: PropTypes.arrayOf(PropTypes.any),
  setMyProperties: PropTypes.func.isRequired,
  // savedProperties: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SavedProperties;
