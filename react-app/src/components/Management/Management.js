import React, { useEffect, useState } from "react";
import "./Management.css"
import * as resumeActions from "../../store/resume";
import { useDispatch, useSelector } from 'react-redux';

const Management = () => {
    const { getResumes } = resumeActions;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getResumes())
    }, [dispatch, getResumes])
    
    const currentUserId = useSelector((state) => state.user.id);
    // const resumes = useSelector((state) => state.resume.filter((resume) => resume.user_id === currentUserId));

    
    const resumes = useSelector((state) => state.resume.resume)
    const resumVals = Object.values(resumes)
    const usersResumes = resumVals.filter((resume) => resume.user_id === currentUserId)

    return (
        <>
            <h1>Management Page</h1>
            { usersResumes && usersResumes.map((resume) => <div dangerouslySetInnerHTML={{ __html: resume.html }} />)}
        </>
    )
}

export default Management