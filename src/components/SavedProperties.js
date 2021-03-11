import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const SavedProperties = ({ userID, savedProperties }) => {
  const [alert, setAlert] = useState({ message: "" });
  const [myProperties, setMyProperties] = useState();
  const [filterFavourites, setFilterFavourites] = useState();

  useEffect(() => {
    setFilterFavourites(
      savedProperties &&
        savedProperties
          .filter((e) => e.fbUserId === userID)
          .map((id) => id.propertyListing)
    );
  }, []);

  useEffect(() => {
    filterFavourites &&
      filterFavourites.forEach((e) => {
        return axios
          .get(`http://localhost:4000/api/v1/PropertyListing/${e}`)
          .then((results) => {
            setMyProperties({
              results: myProperties..., 
              myProperties...
            });
          })
          .catch(() => {
            setAlert({
              message: "Server error. Please try again later",
              isSuccess: false,
            });
          });
      });
  }, [myProperties]);

  if (!alert.isSuccess) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }

  const handleDeleteProperty = (propertyId) => {
    axios.delete("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  console.log(savedProperties);

  return (
    <div className="saved-properties-page">
      <div className="saved-properties">
        {myProperties &&
          myProperties.map((property) => {
            return (
              <PropertyCard
                userID={userID}
                key={property._id}
                title={property.title}
                city={property.city}
                propertyId={property._id}
                type={property.type}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={property.price}
                email={property.email}
                onDeleteProperty={handleDeleteProperty}
              />
            );
          })}
      </div>
    </div>
  );
};

SavedProperties.propTypes = {
  userID: PropTypes.number.isRequired,
  savedProperties: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SavedProperties;
