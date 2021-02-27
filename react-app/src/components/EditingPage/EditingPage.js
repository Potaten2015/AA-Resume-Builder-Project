import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Preview from '../Templates/Preview';
import './EditingPage.css';
import { saveResumes } from '../../store/resume';

const EditingPage = () => {
  const path = window.location.pathname;

  const dispatch = useDispatch();
  const history = useHistory();

  const current_template_object = useSelector((state) => (state ? state.template.current : null));
  const current_resume = useSelector((state) => (state ? state.resume.resume : null));
  const user_id = useSelector((state) => state.user.id);

  const current_template = current_template_object ? current_template_object.fields : null;
  const current_template_name = current_template_object ? current_template_object.name : null;

  const valueHolder = {};

  if (current_template || current_resume.fields) {
    if (path.includes('edit')) {
      if (current_resume.fields) {
        for (let i = 0; i < current_resume.fields.length; i++) {
          valueHolder[i] = current_resume.fields[i].value;
        }
      }
    } else if (current_template) {
      for (let i = 0; i < current_template.length; i++) {
        valueHolder[i] = '';
      }
    }
  }

  const [values, setValues] = useState(valueHolder);

  let tagValue;

  const currentdate = new Date();
  const rightNow =
    currentdate.getDate() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getFullYear() +
    ' @ ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds();

  if (path.includes('edit')) {
    if (current_resume.user_tags.length > 0) {
      tagValue = current_resume.user_tags.join(', ');
    } else {
      tagValue = rightNow;
    }
  } else {
    tagValue = rightNow;
  }
  const [userTags, setUserTags] = useState(tagValue);

  const saveResume = async (e) => {
    const resumeData = {};
    resumeData['fields'] = [];

    if (path.includes('edit')) {
      Object.keys(values).forEach((value) => {
        resumeData['fields'][value] = {
          field_id: current_resume.fields[value].field_id,
          page_order: value,
          value: values[value],
        };
      });
    } else {
      Object.keys(values).forEach((value) => {
        resumeData['fields'][value] = {
          field_id: current_template[value].field_id,
          page_order: value,
          value: values[value],
        };
      });
    }

    const resumeDiv = document.getElementById('resume-to-save');
    const resumeHTML = resumeDiv.innerHTML;

    resumeData['html'] = resumeHTML;
    resumeData['style_id'] = 1;
    resumeData['user_id'] = user_id;
    resumeData['resume_id'] = path.includes('edit') ? current_resume.id : 'NEW';
    console.log(userTags.split(', ').join(',').split(','));
    resumeData['user_tags'] =
      userTags.split(', ').join(',').length > 0
        ? userTags.split(', ').join(',').split(',')
        : [rightNow];

    await dispatch(saveResumes(resumeData)).then(() => history.push('/resumes'));
  };

  if (path.includes('edit')) {
    return (
      current_resume && (
        <div className="editing-page">
          <div className="editing-page-outer">
            <div className="editing-page-form-container">
              <h1>Editing Resume</h1>
              <form className="editing-page-form">
                <Preview
                  template_name={'Now Editing Resume'}
                  template={current_resume.fields}
                  values={values}
                  preview={true}
                  form={true}
                  setValues={setValues}
                />
              </form>
              <label htmlFor="user-tags">Comma Separated Tags (Use to identify your resume)</label>
              <input
                name="user-tags"
                value={userTags}
                onChange={(e) => setUserTags(e.target.value)}
              />
              <button className="editing-page-save-button" onClick={saveResume}>
                Save Resume
              </button>
            </div>
            <div className="editing-page-preview-container">
              <h1>Resume Preview</h1>
              <Preview
                template_name={'Resume Preview'}
                template={current_resume.fields}
                values={values}
                preview={true}
                form={false}
                setValues={setValues}
              />
            </div>
          </div>
        </div>
      )
    );
  } else {
    return (
      current_template_object && (
        <div className="editing-page">
          <div className="editing-page-outer">
            <div className="editing-page-form-container">
              <h1>Editing Resume</h1>
              <form className="editing-page-form">
                <Preview
                  template_name={current_template_name}
                  template={current_template}
                  values={values}
                  preview={true}
                  form={true}
                  setValues={setValues}
                />
              </form>
              <label htmlFor="user-tags">Comma Separated Tags (Use to identify your resume)</label>
              <input
                name="user-tags"
                value={userTags}
                onChange={(e) => setUserTags(e.target.value)}
              />
              <button className="editing-page-save-button" onClick={saveResume}>
                Save Resume
              </button>
            </div>
            <div className="editing-page-preview-container">
              <h1>Resume Preview</h1>
              <Preview
                template_name={current_template_name}
                template={current_template}
                values={values}
                preview={true}
                form={false}
                setValues={setValues}
              />
            </div>
          </div>
        </div>
      )
    );
  }
};

export default EditingPage;
