import React, { useEffect, useState } from 'react';
import './Management.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';

const Management = () => {
    // 
    // const [manageResumes, setManageResumes] = useState([])
    // const [user, setUser] = useState('')
    const { getResumes } = resumeActions;

    const dispatch = useDispatch()
    const resumes = useSelector((state) => state.resume.resume)
    const currentUser = useSelector((state) => state.user)
    // const currentUserId = useSelector((state) => state.user.id)
    console.log("CURRENT USER", currentUser)

    // useEffect(() => {
    //     if (currentUser) {
    //         setUser(currentUser)
    //     }
    // }, [currentUser])

    useEffect(() => {
        dispatch(getResumes())
        // setManageResumes(Object.values(resumes).filter((resume) => resume.user_id === currentUserId))
    }, [getResumes, dispatch, currentUser])

    
    // const resumVals = Object.values(resumes)
    // const usersResumes = resumVals.filter((resume) => resume.user_id === currentUserId)
    // setManageResumes(usersResumes)
    // const resumes = useSelector((state) => state.resume.filter((resume) => resume.user_id === currentUserId));

    

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
