import { useState } from 'react';

function useToogleHook(initialValue=false) {
  const [state, setState] = useState(initialValue);
  const toggle = ()=>{
      setState(!state);
  }
  return [state, toggle ];
}

export default useToogleHook;
