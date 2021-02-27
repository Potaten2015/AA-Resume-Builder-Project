import React, { useEffect, useState } from 'react';
import './Resume.css';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton'

const Resume = () => {
    const { resumeId } = useParams()
    const history = useHistory()

    const { getOneResume } = resumeActions;
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const resume = useSelector((state) => state.resume.resume)

    useEffect(() => {
        dispatch(getOneResume(resumeId)).then(() => setLoaded(true));
    }, [dispatch, getOneResume, resumeId]);

    const editResume = async (e) => {
        await dispatch(resumeActions.editResumes(resumeId))
        history.push('/resume/0/edit')
    }

    return (
        <>
            {loaded &&
                resume &&
                <>
                    <div className="resume_space block">
                    <div className="individual_resume border border-black overflow-hidden" dangerouslySetInnerHTML={{ __html: resume.html }} />
                        <div className="relative top-6">
                            <DeleteButton />
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Resume;
