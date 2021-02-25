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
  }, [dispatch]);

  return (
    <>
      <h1 className="text-2xl z-10 relative bg-gray-200 p-4 font-sans font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Your Resumes</h1>
      <div className="resume-container relative z-20 inset-x-2.5 flex flex-wrap justify-left">
        {loaded &&
          resumes &&
          Object.values(resumes).map((resume) => {
            return (
              <>
                <div dangerouslySetInnerHTML={{ __html: resume.html }} />
              </>
            );
          })}
        </div>
    </>
  );
};

export default Management;
