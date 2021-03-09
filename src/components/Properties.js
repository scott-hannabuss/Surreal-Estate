import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./Sidebar";
import "../styles/Properties.css";

const Properties = ({ userID }) => {
  console.log(userID);
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((results) => {
        setProperties(results.data);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then((results) => setProperties(results.data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, [search]);

  if (alert.message) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }

  const handleSaveProperty = (propertyId) => {
    console.log(propertyId);
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  return (
    <div className="properties-page">
      <div className="properties">
        <div className="sidebar">
          <SideBar />
        </div>
        {properties &&
          properties.map((property) => {
            return (
              <PropertyCard
                userID={userID}
                key={property._id}
                title={property.title}
                city={property.city}
                type={property.type}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={property.price}
                email={property.email}
                onSaveProperty={handleSaveProperty}
                propertyId={property._id}
              />
            );
          })}
      </div>
    </div>
  );
};

Properties.propTypes = {
  userID: PropTypes.number.isRequired,
};

export default Properties;
