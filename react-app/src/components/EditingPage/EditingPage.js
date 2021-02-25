import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditHelper from '../EditHelper';
import Preview from '../Templates/Preview';
import './EditingPage.css';

const EditingPage = () => {
  const current_template_object = useSelector((state) => state.template.current);
  const current_template = current_template_object.fields;
  const current_template_name = current_template_object.name;
  const valueHolder = {};
  for (let i = 0; i < current_template.length; i++) {
    valueHolder[i] = '';
  }
  const [values, setValues] = useState(valueHolder);

  return (
    <div className="editing-page">
      <div className="editing-page-outer">
        <div className="editing-page-form-container">
          <h1>Editing Resume</h1>
          <form className="editing-page-form">
            <Preview template_name={current_template_name} template={current_template} values={values} preview={true} form={true} setValues={setValues}/>
          </form>
          <button className="editing-page-save-button">Save Resume</button>
        </div>
        <div className="editing-page-preview-container">
          <h1>Resume Preview</h1>
          <Preview template_name={current_template_name} template={current_template} values={values} preview={true} form={false} setValues={setValues}/>
        </div>
      </div>
    </div>
  );
};

export default EditingPage;
