import React, { useEffect, useState } from 'react';
import './Resume.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const { resumeId } = useParams();
  const history = useHistory();

  const { getOneResume } = resumeActions;
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.resume);

  useEffect(() => {
    dispatch(getOneResume(resumeId)).then(() => setLoaded(true));
  }, [dispatch, getOneResume, resumeId]);

  const editResume = async (e) => {
    await dispatch(resumeActions.editResumes(resumeId));
    history.push('/resume/0/edit');
  };

  const saveAsPDF = () => {
    console.log('Saving as PDF...');
    const element = document.getElementById('save-resume');
    html2pdf(element);
  };

  return (
    <>
      {loaded && resume && (
        <>
          <div className="resume_space block">
            <div className="individual_resume border border-black overflow-hidden p-2 max-w-3xl max-h-96 min-w-content min-h-content">
              <div
                className="p-2"
                dangerouslySetInnerHTML={{ __html: resume.html }}
                id="save-resume"
              />
            </div>
            <div className="relative top-6">
              <DeleteButton />
              <button onClick={editResume}>Edit</button>
            </div>
            <div className="relative top-6">
              <button onClick={saveAsPDF}>Save as PDF</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Resume;
