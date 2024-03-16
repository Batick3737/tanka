import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edite } from "./Edite";

const ShowInfo = ({obj}) => {
  const arr = Object.entries(obj);
  return (
    <ul>
      {arr.map((parent) => {
      return (
        <>
          <li>{`${parent[0]}: ${typeof parent[1] === 'object' && parent[1].constructor.name === 'Object' ? '' : parent[1]}`}</li>

            {typeof parent[1] === 'object' && parent[1].constructor.name === 'Object' && <ShowInfo obj={parent[1]} />}
      
        </>
      );
    })}
    </ul>
  )
}

export const Info = ({ car, cars, setCars }) => {
  const [isEdit, setIsEdit] = useState(false);
  
  return (
    <>
      {!isEdit ? (
        <div className='info'>
          {<ShowInfo obj={car} />}
          <div className='info__buttons'>
            <button onClick={() => setIsEdit(true)} className='button'>Edit</button>
            <Link to={'/cars'} className='info__link button'>
              go back
            </Link>
          </div>
        </div>)
        : (<Edite car={car} cars={cars} setCars={setCars} setIsEdit={setIsEdit}/>)}
    </>
  );
};
