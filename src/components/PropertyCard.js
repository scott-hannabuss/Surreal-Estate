import React from "react";
import PropTypes from "prop-types";
import "../styles/Propertycard.css";

const PropertyCard = (props) => {
  const {
    title,
    propertyId,
    city,
    type,
    bathrooms,
    bedrooms,
    price,
    email,
    userID,
    onSaveProperty,
    onDeleteProperty,
  } = props;

  return (
    <div className="property-card">
      <div className="property-card-title">{title}</div>
      <div className="property-card-city">{city}</div>
      <div className="property-card-type">{type}</div>
      <div className="property-card-bathrooms">{bathrooms}</div>
      <div className="property-card-bedrooms">{bedrooms}</div>
      <div className="property-card-price">{price}</div>
      <div className="property-card-email">{email}</div>
      {userID && (
        <div className="save-button">
          <button type="button" onClick={() => onSaveProperty(propertyId)}>
            Save
          </button>
        </div>
      )}
      {userID && (
        <div className="delete-button">
          <button type="button" onClick={() => onDeleteProperty(propertyId)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  onDeleteProperty: PropTypes.func.isRequired,
  propertyId: PropTypes.string.isRequired,
};

export default PropertyCard;
