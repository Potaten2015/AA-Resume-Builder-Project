import React, { useEffect, useState } from 'react';
import './Resume.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Resume = () => {
    const { resumeId } = useParams()
    const { getOneResume } = resumeActions;
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const resume = useSelector((state) => state.resume.resume)
    debugger
    const currentUser = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getOneResume(resumeId)).then(() => setLoaded(true));
    }, [dispatch]);

    return (
        <>
            {loaded &&
                resume &&
                    <div dangerouslySetInnerHTML={{ __html: resume.html }} />
            }
        </>
    );
};

export default Resume;
