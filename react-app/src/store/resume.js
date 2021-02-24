const LOAD_RESUMES = 'resume/LOAD_RESUMES';
const CLEAR_RESUMES = 'resume/CLEAR_RESUMES';

const resume_loading = (resumes) => ({
  type: LOAD_RESUMES,
  resumes,
});

const clear_resumes = () => ({
  type: CLEAR_RESUMES,
});

export const getResumes = () => async (dispatch) => {
  const response = await fetch(`/api/resumes/`);
  const res = await response.json();
  dispatch(resume_loading(res));
};

export const getOneResume = (id) => async (dispatch) => {
  const response = await fetch(`/api/resumes/${id}`);
  const res = await response.json();
  debugger
  dispatch(resume_loading(res));
};

export const clearResumes = () => async (dispatch) => {
  await dispatch(clear_resumes());
  return;
};

const resumeReducer = (state = {}, action) => {

  let newState;
  switch (action.type) {
    case LOAD_RESUMES: {
      newState = {};
      newState.resume = action.resumes;
      debugger
      return newState;
    }
    case CLEAR_RESUMES: {
      newState = {};
      return newState;
    }
    default:
      return state;
  }
};

export default resumeReducer;
