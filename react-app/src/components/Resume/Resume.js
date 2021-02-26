import React, { useEffect, useState } from 'react';
import './Resume.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton'

const Resume = () => {
    const { resumeId } = useParams()
    const { getOneResume } = resumeActions;
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const resume = useSelector((state) => state.resume.resume)

    useEffect(() => {
        dispatch(getOneResume(resumeId)).then(() => setLoaded(true));
    }, [dispatch]);

    return (
        <>
            {loaded &&
                resume &&
                <>
                    <div className="resume_space block">
                        <div className="individual_resume border border-black" dangerouslySetInnerHTML={{ __html: resume.html }} />
                    </div>
                    <div className="relative bottom-6 left-24">
                        <DeleteButton />
                    </div>
                </>
            }
        </>
    );
};

export default Resume;