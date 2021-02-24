import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditHelper from '../EditHelper';
import './EditingPage.css';

const EditingPage = () => {
  const current_template = useSelector((state) => state.template.current);
  const valueHolder = {};
  for (let i = 0; i < current_template.length; i++) {
    valueHolder[i] = '';
  }
  console.log('VALUE HOLDER', valueHolder);
  const [values, setValues] = useState(valueHolder);

  // useEffect(() => {
  //   console.log('values', values[0]);
  // }, []);
  return (
    <div className="editing-page">
      <div className="editing-page-outer">
        <div className="editing-page-form-container">
          <h1>Editing Resume</h1>
          <form>
            {current_template.map((field, index) => {
              console.log('VALUES', values);
              return (
                <div>
                  <EditHelper
                    field={field}
                    form={true}
                    value={values[index]}
                    setValues={setValues}
                    number={index}
                    valueHolder={valueHolder}
                  />
                </div>
              );
            })}
          </form>
        </div>
        <div className="editing-page-preview-container">
          <h1>Resume Preview</h1>
          <p>This is a preview</p>
        </div>
      </div>
    </div>
  );
};

export default EditingPage;
