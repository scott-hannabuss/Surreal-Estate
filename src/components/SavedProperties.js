import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
// import Alert from "./Alert";

// eslint-disable-next-line no-unused-expressions

const SavedProperties = ({ userID, myProperties, setMyProperties }) => {
  // const [alert, setAlert] = useState({ message: "" });
  // const [myFilteredProperties, setMyFilteredProperties] = useState();
  // const [filterFavourites, setFilterFavourites] = useState();

  // useEffect(() => {
  //   setFilterFavourites(
  //     savedProperties &&
  //       savedProperties
  //         .filter((e) => e.fbUserId === userID)
  //         .map((id) => id.propertyListing)
  //   );
  // }, []);
  const getFavourites = () => {
    return axios
      .get(
        `http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing`
      )
      .then((results) => {
        setMyProperties(results.data.filter((e) => e.propertyListing));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // filterFavourites &&
    //   filterFavourites.forEach((e) => {
    //
    // return axios
    //   .get(
    //     `http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing`
    //   )
    //   .then((results) => {
    //     setMyProperties(results.data.filter((e) => e.propertyListing));
    //   })
    //   .catch((err) => console.error(err));
    // setAlert({
    //   message: "Server error. Please try again later",
    //   isSuccess: false,
    // });

    // if (!alert.isSuccess) {
    //   return <Alert message={alert.message} success={alert.isSuccess} />;
    // }
    getFavourites();
  }, []);

  const handleDeleteProperty = (favouriteId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`, {
        propertyListing: favouriteId,
        fbUserId: userID,
      })
      .then(() => getFavourites());
  };

  return (
    <div className="saved-properties-page">
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
