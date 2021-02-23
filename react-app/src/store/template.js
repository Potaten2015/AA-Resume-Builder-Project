const LOAD_TEMPLATES = 'resume/LOAD_TEMPLATES'

const resume_loading = resumes => ({
    type: LOAD_TEMPLATES,
    resumes
})

export const getTemplates = () => async dispatch =>{
    const response = await fetch(`api/templates/`)
    dispatch(resume_loading(response))
}

const templateReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD_TEMPLATES: {
            newState = state;
            newState.templates = action
            return newState;
        }
        default:
            return state
    }
}

export default templateReducer;
