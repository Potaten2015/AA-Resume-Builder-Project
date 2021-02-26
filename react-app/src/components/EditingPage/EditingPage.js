import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditHelper from '../EditHelper';
import Preview from '../Templates/Preview';
import './EditingPage.css';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../../store';

const EditingPage = () => {
  const current_template_object = useSelector((state) => state.template.current);
  const current_template = current_template_object.fields;
  const current_template_name = current_template_object.name;
  const valueHolder = {};
  for (let i = 0; i < current_template.length; i++) {
    valueHolder[i] = '';
  }
  console.log('VALUE HOLDER', valueHolder);
  const [values, setValues] = useState(valueHolder);

  const printHTML = () => {
    // const livePreview = ReactDOM.findDOMNode(
    //   <Preview
    //     template_name={current_template_name}
    //     template={current_template}
    //     values={values}
    //     preview={true}
    //   />
    // );
    // <Provider store={store}>
    //   <Preview
    //     template_name={current_template_name}
    //     template={current_template}
    //     values={values}
    //     preview={false}
    //   />
    // </Provider>
    const livePreview = document.getElementById('resume-to-save');
    const rawHTML = livePreview.innerHTML;
    console.log(rawHTML);
    return <Redirect to="/resumes" />;
  };

  return (
    <div className="editing-page">
      <div className="editing-page-outer">
        <div className="editing-page-form-container">
          <h1>Editing Resume</h1>
          <form>
            {current_template.map((field, index) => {
              // console.log('VALUES', values);
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
          <button onClick={printHTML}>Print HTML</button>
        </div>
        <div className="editing-page-preview-container">
          <h1>Resume Preview</h1>
          <Preview
            template_name={current_template_name}
            template={current_template}
            values={values}
            preview={true}
          />
        </div>
      </div>
    </div>
  );
};

export default EditingPage;
