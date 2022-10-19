import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetingSlice';

const RandomGreeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.randomGreeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
      {randomGreeting.map((greeting) => (
        <div className="d-flex flex-column justify-content-between align-items-center mt-5" key={greeting.id}>
          <h1>Refresh the page to get a random greeting.</h1>
          <h2 className="mt-5">{greeting.language}</h2>
          <p>{greeting.message}</p>
        </div>
      ))}
    </>
  );
};
export default RandomGreeting;
