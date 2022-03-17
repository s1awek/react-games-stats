/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';
import { SingleMetadata } from '../components';
import { labels } from '../utils/constants';

export const Metadata = () => {
  const { singleData } = useGlobalContext();
  let variablesArr = [];

  for (let key in singleData[0]) {
    if (labels[key]) {
      variablesArr.push({ label: labels[key], itemsArr: singleData[0][key] });
    }
  }

  return (
    <div>
      {variablesArr.map((item, index) => {
        const { label, itemsArr } = item;
        if (itemsArr.length) {
          return <SingleMetadata key={index} label={label} itemsArr={itemsArr} />;
        }
      })}
    </div>
  );
};
