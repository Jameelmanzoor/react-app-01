import React from 'react';

const NumberReducer = (state, action) => {
  switch(action.type) {
    case 'Inc':
      return state + 1;
    
    case 'Dec':
      return state - 1;

  }
}

export default NumberReducer;