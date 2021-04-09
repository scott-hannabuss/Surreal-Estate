import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Propertycard.css";
// import SavedProperties from "./SavedProperties";

const PropertyCard = (props) => {
  const {
    title,
    propertyId,
    city,
    type,
    bathrooms,
    bedrooms,
    price,
    // email,
    userID,
    onSaveProperty,
    onDeleteProperty,
    myProperties,
    favouriteId,
  } = props;

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    if (myProperties && userID) {
      setShowDelete(true);
    }
  }, [myProperties]);

  return (
    <div className="property-card">
      <div className="property-card-title">Property Title: {title}</div>
      <div className="property-card-city">{city}</div>
      <div className="property-card-type">{type}</div>
      <div className="property-card-bathrooms">{bathrooms}</div>
      <div className="property-card-bedrooms">{bedrooms}</div>
      <div className="property-card-price">£{price}</div>
      {/* <div className="property-card-email">Email owner @ {email}</div> */}
      {userID && !showDelete && (
        // myProperties.filter((e) => propertyId !== e.propertyListing._id) && (
        <div>
          {/* render save or delete button after user sign-in so they can save and delete favourite properties */}

          <button
            className="save-button"
            type="button"
            onClick={() => onSaveProperty(propertyId)}
          >
            Save Property
          </button>
        </div>
      )}
      {showDelete &&
        myProperties.filter((e) => propertyId === e.propertyListing._id) && (
          <button
            className="delete-button"
            type="button"
            onClick={() => onDeleteProperty(favouriteId)}
          >
            Delete Property
          </button>
        )}
    </div>
  );
};

PropertyCard.defaultProps = {
  myProperties: undefined,
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  onDeleteProperty: PropTypes.func.isRequired,
  propertyId: PropTypes.string.isRequired,
  myProperties: PropTypes.arrayOf(PropTypes.any),
  favouriteId: PropTypes.string.isRequired,
};

export default PropertyCard;
