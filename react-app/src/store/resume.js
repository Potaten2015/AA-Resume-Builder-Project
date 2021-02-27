const LOAD_RESUMES = 'resume/LOAD_RESUMES';
const CLEAR_RESUMES = 'resume/CLEAR_RESUMES';
const EDIT_RESUMES = 'resume/EDIT_RESUMES';

const resume_loading = (resumes) => ({
  type: LOAD_RESUMES,
  resumes,
});

const clear_resumes = () => ({
  type: CLEAR_RESUMES,
});

const edit_resumes = (resume) => ({
  type: EDIT_RESUMES,
  resume
});

export const getResumes = () => async (dispatch) => {
  const response = await fetch(`/api/resumes/`);
  const res = await response.json();
  dispatch(resume_loading(res));
};

export const getOneResume = (id) => async (dispatch) => {
  const response = await fetch(`/api/resumes/${id}`);
  const res = await response.json();
  dispatch(resume_loading(res));
};

export const clearResumes = () => async (dispatch) => {
  await dispatch(clear_resumes());
  return;
};

export const saveResumes = (resumeData) => async (dispatch) => {
  const response = await fetch(`/api/resumes/save`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(resumeData)
  })
}

export const editResumes = (resumeId) => async (dispatch) => {
  const response = await fetch(`/api/resumes/edit/${resumeId}`);
  const res = await response.json();
  dispatch(edit_resumes(res));
  return res;
};

const resumeReducer = (state = {}, action) => {

  let newState;
  switch (action.type) {
    case LOAD_RESUMES: {
      newState = {};
      newState.resume = action.resumes;
      return newState;
    }
    case CLEAR_RESUMES: {
      newState = {};
      return newState;
    }
    case EDIT_RESUMES: {
      newState = {};
      newState.resume = action.resume;
      return newState;
    }
    default:
      return state;
  }
};

export default resumeReducer;
