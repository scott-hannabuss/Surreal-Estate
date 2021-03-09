import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const SavedProperties = ({ userID }) => {
  const [savedProperties, setSavedProperties] = useState();
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite")
      .then((results) => {
        setSavedProperties(results.data);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, []);

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
        {savedProperties &&
          savedProperties.map((property) => {
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
};

export default SavedProperties;
