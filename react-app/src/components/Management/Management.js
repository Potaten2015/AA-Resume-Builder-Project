import React, { useEffect, useState } from 'react';
import './Management.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';

const Management = () => {
  const { getResumes } = resumeActions;
  let [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResumes()).then(setLoaded(true));
  }, [dispatch]);

  const resumes = useSelector((state) => state.resume);

  return (
    <>
      <h1>Management Page</h1>
      {loaded &&
        resumes.length &&
        resumes.map((resume) => <div dangerouslySetInnerHTML={{ __html: resume }} />)}
    </>
  );
};

export default Management;
