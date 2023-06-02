import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [state, setState] = useState('Salman');
  const myName = 'Istehsan';

  useEffect(() => {
    setState(myName);
    console.log('Use effect called');
  }, []);

  return <div>{state}</div>;
};

export default UseEffect;
