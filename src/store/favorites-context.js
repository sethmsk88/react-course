import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},  // adding this here to allow Intellisense to see this function
  removeFavorite: (meetupId) => {}, // adding this here to allow Intellisense to see this function
  itemIsFavorite: (meetupId) => {}  // adding this here to allow Intellisense to see this function
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);   // manage the state of an array of favorited meetups
  
  function addFavoriteHandler(favoriteMeetup) {
      setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.concat(favoriteMeetup);
      });
  }

  function removeFavoriteHandler(meetupId) {
      setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
      });

  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }
  
  const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoriteHandler,
      removeFavorite: removeFavoriteHandler,
      itemIsFavorite: itemIsFavoriteHandler
  };

  // FavoritesContext.Provider is a component that the FavoritesContext object has built in
  return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;