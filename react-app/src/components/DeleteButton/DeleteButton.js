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
        await dispatch(deleteAResume(resumeId))
            .then(dispatch(getResumes()))
            .then(() => setLoaded(true))
            .then(history.push('/resumes'))
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