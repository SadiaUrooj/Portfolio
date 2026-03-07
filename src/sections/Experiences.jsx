import React from 'react';
import { Timeline } from '../components/Timeline';
import { experiences } from '../constants/index';

const Experiences = () => {
  return (
    <div className="w-full">
        Experiences
        <Timeline data={experiences} />
        </div>
  );
};

export default Experiences;