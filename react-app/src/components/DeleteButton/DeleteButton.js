import React, { useEffect, useState } from 'react';
import * as resumeActions from '../../store/resume';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DeleteButton = () => {
    const { resumeId } = useParams()
    const { deleteAResume } = resumeActions;
    const dispatch = useDispatch();

    const byeResume = async(e) => {
        await dispatch(deleteAResume(resumeId));
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