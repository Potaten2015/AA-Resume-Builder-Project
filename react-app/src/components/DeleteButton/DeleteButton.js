import React, { useEffect, useState, } from 'react';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const DeleteButton = () => {
    const { resumeId } = useParams()
    const [loaded, setLoaded] = useState(false);
    const { deleteAResume, getResumes } = resumeActions;
    const dispatch = useDispatch();
    const history = useHistory()

    
    
    const byeResume = async(e) => {
        if (window.confirm('Are you sure you want to save this thing into the database?')) {
            // Save it!
            await dispatch(deleteAResume(resumeId))
                .then(dispatch(getResumes()))
                .then(() => setLoaded(true))
                .then(history.push('/resumes'))
        } else {
            return
        }
    }

    return (
        <>
        <button
            onClick={byeResume}
            className="border hover:bg-red-700">
            Delete
        </button>
        </>
    );
};

export default DeleteButton