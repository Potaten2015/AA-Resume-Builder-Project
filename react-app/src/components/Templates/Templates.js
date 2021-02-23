import React, { useEffect, useState } from 'react';
import './Templates.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplates } from '../../store/template';

const Templates = () => {
  const dispatch = useDispatch();
  let templates = useSelector((state) => state.template.templates);
  let [loaded, setLoaded] = useState(false);

  // console.log(Object.keys(templates))

  useEffect(() => {
    dispatch(getTemplates()).then(setLoaded(true));
  }, [dispatch]);

  return (
    <div className="templates-page">
      <div className="templates-page-outer">
        <div className="template-page-inner">
          <h1>Templates</h1>
          <div className="template-row">
            {loaded &&
              Object.keys(templates).length > 0 &&
              Object.keys(templates).map((temp_key) => {
                const scaryHTML = () => {
                  return { __html: templates[temp_key] };
                };
                return (
                  <div className="template-solo">
                    <h2>{temp_key}</h2>
                    <div dangerouslySetInnerHTML={scaryHTML()} key={temp_key} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
