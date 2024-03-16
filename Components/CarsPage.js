import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import carsFromServer from '../cars.json';
import { Info } from "./Info";

export const CarsPage = () => {
  const { careId } = useParams();

  const [cars, setCars] = useState([]);
  const selectedCar = careId ? [...cars].find(a => a.carId === careId) : null;

  useEffect(() => {
    setCars(carsFromServer);
  }, []);

  return (
    <>
      {selectedCar ? (<Info car={selectedCar} cars={cars} setCars={setCars} />) : (<div className='cars'>
        {cars.map(car => (
          <div key={car.carId} className='car'>
            <div>id: {car.carId}</div>
            <div>manufacturer: {car.manufacturer}</div>
            <div>model: {car.model}</div>
            <div>year: {car.year}</div>
            <Link to={`/cars/${car.carId}`} className='car__link'>
              more info
            </Link>
          </div>
        ))}
      </div>)}
    </>
  );
};
