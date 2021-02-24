import React, { useEffect } from 'react';
import './Management.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';

const Management = () => {
    const { getResumes } = resumeActions;

    const dispatch = useDispatch()
    const resumes = useSelector((state) => state.resume.resume)
    const currentUser = useSelector((state) => state.user)
    
    useEffect(() => {
        dispatch(getResumes())
    }, [getResumes, dispatch, currentUser])

    return (
        <>
            <h1>Management Page for {currentUser.username}</h1>
            { resumes && Object.values(resumes).map((resume) => {
                return (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: resume.html }}/>
                    </>
                )})}
        </>
    )
}

export default Management
