import React from 'react';
import './Templates.css';
import {useDispatch, useEffect} from 'react-redux'

const Templates = () => {

  const dispatch = useDispatch()
  

  useEffect(()=>{

  }, [dispatch])

  return (
  <div className="templates-page">
    <div className="templates-page-outer">
      <div className="template-page-inner">

      </div>
    </div>
  </div>
  );
};

export default Templates;
