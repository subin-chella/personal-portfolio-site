import React, { useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1988-06-15T09:24:00');
    const workstarttime = new Date('2009-09-15T00:00:00');
    setData({
      ...data,
      age: {
        label: 'Current age',
        value: ((Date.now() - birthTime) / divisor).toFixed(11),
      },
      yearsofexp: {
        label: 'Years of work exp',
        value: ((Date.now() - workstarttime) / divisor).toFixed(11),
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map((key) => data[key])} />
    </>
  );
};

export default PersonalStats;