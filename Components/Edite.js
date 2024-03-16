import React, { useState } from 'react';

export const Edite = ({ car, cars, setCars, setIsEdit }) => {
  const [color, setColor] = useState(car.color);
  const [features, setFeatures] = useState(car.features);
  const [engine, setEngine] = useState({
    type: car.engine.type,
    horsepower: car.engine.horsepower,
    fuelSystem: {
      type: car.engine.fuelSystem.type,
      efficiency: car.engine.fuelSystem.efficiency,
      emissions: {
        co2: car.engine.fuelSystem.emissions.co2,
        nox: car.engine.fuelSystem.emissions.nox
      }
    }
  });

  const updateCars = () => {
    const index = cars.findIndex(a => a.carId === car.carId);
    const updateCars = [...cars];
    updateCars[index] = {...car,
    color: color,
    engine: {
      type: engine.type,
      horsepower: engine.horsepower,
      fuelSystem: {
        type: engine.fuelSystem.type,
        efficiency: engine.fuelSystem.efficiency,
        emissions: {
          co2: engine.fuelSystem.emissions.co2,
          nox:  engine.fuelSystem.emissions.nox
        }
      }
    }}
    setCars(updateCars);
    setIsEdit(false);
  }
  
  return (
    <>
    <form>
      <label className='edit'>
        color: 
        <input
          type="text"
          className="edit__info"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }} />
      </label>
    </form>
    <form>
      <div className='title'>engine:</div>
      <label className='edit'>
        type:

        <input
          type="text"
          className="edit__info"
          value={engine.type}
          onChange={(event) => {
            setEngine({ ...engine, type: event.target.value });
          }} />
      </label>
      <label className='edit'>
        horsepower: <input
          type="text"
          className="edit__info"
          value={engine.horsepower}
          onChange={(event) => {
            setEngine({ ...engine, horsepower: event.target.value });
          }} />
      </label>

      <div className='title'>fuelSystem:</div>
      <label className='edit'>
        type:

        <input
          type="text"
          className="edit__info"
          value={engine.fuelSystem.type}
          onChange={(event) => {
            setEngine({ ...engine, fuelSystem: { ...engine.fuelSystem, type: event.target.value } });
          }} />
      </label>

      <label className='edit'>
        efficiency:

        <input
          type="text"
          className="edit__info"
          value={engine.fuelSystem.efficiency}
          onChange={(event) => {
            setEngine({ ...engine, fuelSystem: { ...engine.fuelSystem, efficiency: event.target.value } });
          }} />
      </label>


      <div className='title'>emissions:</div>
      <label className='edit'>
        co2:
        <input
          type="text"
          className="edit__info"
          value={engine.fuelSystem.emissions.co2}
          onChange={(event) => {
            setEngine({ ...engine, fuelSystem: { ...engine.fuelSystem, emissions: { ...engine.fuelSystem.emissions, co2: event.target.value } } });
          }} />
      </label>

      <label className='edit'>
        nox:
        <input
          type="text"
          className="edit__info"
          value={engine.fuelSystem.emissions.nox}
          onChange={(event) => {
            setEngine({ ...engine, fuelSystem: { ...engine.fuelSystem, emissions: { ...engine.fuelSystem.emissions, nox: event.target.value } } });
          }} />
      </label>
    </form>

    <label className='edit'>
        features: <input
          type="text"
          className="edit__info"
          value={features}
          onChange={(event) => {
            setFeatures(event.target.value);
          }} />
      </label>
      <div className='edit__buttons'>
        <button onClick={() => setIsEdit(false)} className='button'>Cancel</button>
        <button onClick={() => updateCars()} className='button'>Save</button>
      </div>
    </>

    
  );

};
