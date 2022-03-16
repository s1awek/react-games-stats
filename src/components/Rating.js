/** @format */

import React from 'react';
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const Rating = ({ props: { rating, rating_count } }) => {
  let percentage = 0;
  if (rating_count) {
    percentage = Math.floor(rating);
  }

  return (
    <div label='Arbitrary content'>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={15}
        text={`${percentage ? percentage + '%' : 'N/A'}`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 1,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',

          // Text size
          textSize: '20px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `#1165EF`,
          textColor: `${percentage < 50 ? '#ef3211' : '#1165EF'}`,
          trailColor: '#ef3211',
          backgroundColor: '#ff0000',
        })}
      >
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
      </CircularProgressbarWithChildren>
    </div>
  );
};
