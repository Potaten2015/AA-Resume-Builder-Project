import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import Preview from '../Templates/Preview';
import './EditingPage.css';
import {saveResumes} from '../../store/resume'

const EditingPage = () => {

  const href = window.location.href


  const dispatch = useDispatch()
  const history = useHistory()

  const current_template_object = useSelector((state) => state ? state.template.current : null);
  const current_resume = useSelector((state) => state ? state.resume.resume : null);
  const user_id = useSelector(state => state.user.id)

  const current_template = current_template_object ? current_template_object.fields : null;
  const current_template_name = current_template_object ? current_template_object.name : null;

  const valueHolder = {};

  if(current_template || current_resume.field_data){
    if(href.includes("edit") && current_resume.field_data) {
      for (let i = 0; i < current_resume.field_data.length; i++) {
        // console.log(current_resume.field_data)
        valueHolder[i] = current_resume.field_data[i].value;
      }
    } else if(current_template) {
      for (let i = 0; i < current_template.length; i++) {
        valueHolder[i] = '';
      }
    }
  }

  const [values, setValues] = useState(valueHolder);

  const saveResume = (e) =>{

    const resumeData = {}
    resumeData["fields"] = []

    Object.keys(values).forEach(value => {
      resumeData["fields"][value] = {"field_id": current_template[value].field_id, "page_order": value, "value": values[value]}
    })

    resumeData["style_id"] = 1
    resumeData["user_id"] = user_id

    dispatch(saveResumes(resumeData))

    history.push('/resumes')

  }

  return current_template_object && (
    <div className="editing-page">
      <div className="editing-page-outer">
        <div className="editing-page-form-container">
          <h1>Editing Resume</h1>
          <form className="editing-page-form">
            <Preview template_name={current_template_name} template={current_template} values={values} preview={true} form={true} setValues={setValues}/>
          </form>
          <button className="editing-page-save-button" onClick={saveResume}>Save Resume</button>
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
