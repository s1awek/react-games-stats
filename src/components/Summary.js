/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

export const Summary = () => {
  const collapseInner = useRef(null);
  const collapseOuter = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const { isGameLoading, singleData } = useGlobalContext();
  const { summary } = singleData[0] || {};
  useEffect(() => {
    if (collapseInner?.current && collapseOuter?.current) {
      if (collapseOuter.current.getBoundingClientRect().height < collapseInner.current.getBoundingClientRect().height) {
        setShowReadMore(true);
      } else {
        setShowReadMore(false);
      }
    }
  }, [isGameLoading]);
  const toggleText = (e) => {
    const innerDims = collapseInner.current.getBoundingClientRect();
    const outerDims = collapseOuter.current.getBoundingClientRect();
    if (innerDims.height > outerDims.height) {
      collapseOuter.current.style.maxHeight = `${innerDims.height + 10}px`;
      collapseOuter.current.style.height = `${outerDims.height}px`;
      collapseOuter.current.style.height = `${innerDims.height + 10}px`;
      e.target.textContent = 'Show less...';
    } else {
      collapseOuter.current.style.maxHeight = '';
      collapseOuter.current.style.height = `${outerDims.maxHeight}px`;
      e.target.textContent = 'Show more...';
    }
  };
  return (
    <>
      <div className='sumary-outer' ref={collapseOuter}>
        <div className='sumary-inner' ref={collapseInner}>
          <p style={{ whiteSpace: 'pre-wrap' }}>{summary}</p>
        </div>
      </div>
      {showReadMore && (
        <button className='btn btn-secondary' onClick={toggleText}>
          Show more...
        </button>
      )}
    </>
  );
};
