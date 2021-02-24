const LOAD_RESUMES = 'resume/LOAD_RESUMES';

const resume_loading = (resumes) => ({
  type: LOAD_RESUMES,
  resumes,
});

export const getResumes = () => async (dispatch) => {
  const response = await fetch(`/api/resumes/`);
  const res = await response.json();
  dispatch(resume_loading(res));
};

const resumeReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_RESUMES: {
            newState = {}
            newState.resume = action.resumes;
            return newState;
        }
        default:
            return state
    }
};

export default resumeReducer;
