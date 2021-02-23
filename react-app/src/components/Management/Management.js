import React, { useEffect, useState } from 'react';
import './Management.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';

const Management = () => {
  const { getResumes } = resumeActions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResumes());
  }, [dispatch, getResumes]);

  const resumes = useSelector((state) => state.resume);
  console.log(resumes);

  return (
    <>
      <h1>Management Page</h1>
      {/* { resumes && resumes.map((resume) => <div dangerouslySetInnerHTML={{ __html: resume }} />)} */}
    </>
  );
};

export default Management;
