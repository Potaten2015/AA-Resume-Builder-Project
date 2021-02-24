import React, { useEffect, useState } from 'react';
import './Management.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';

const Management = () => {
  const { getResumes } = resumeActions;
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resume.resume);
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getResumes()).then(() => setLoaded(true));
    console.log('RESUMES', resumes);
  }, [dispatch]);

  return (
    <>
      <h1>Management Page for {currentUser.username}</h1>
      {loaded &&
        resumes &&
        Object.values(resumes).map((resume) => {
          return (
            <>
              <div dangerouslySetInnerHTML={{ __html: resume.html }} />
            </>
          );
        })}
    </>
  );
};

export default Management;
