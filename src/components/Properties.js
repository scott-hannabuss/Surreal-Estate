import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ results }) => {
        setProperties(results);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, []);

  if (alert.message) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }

  return (
    <div className="properties-page">
      <div className="properties">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            title={property.title}
            city={property.city}
            type={property.type}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            email={property.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;
