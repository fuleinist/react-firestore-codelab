import React from 'react';
import { FirestoreCollection } from 'react-firestore';

export const RestaurantList = () => {
  return (
    <FirestoreCollection
      path="restaurants"
      sort="name:desc"
      render={({ isLoading, data }) => {
        return isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>Stories</h1>
            <ul>
              {data.map(restaurant => (
                <li key={restaurant.id}>
                  {restaurant.name} - {restaurant.city}
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    />)
}