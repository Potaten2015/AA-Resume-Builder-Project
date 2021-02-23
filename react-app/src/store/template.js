const LOAD_TEMPLATES = 'resume/LOAD_TEMPLATES'

const template_loading = templates => ({
    type: LOAD_TEMPLATES,
    templates
})

export const getTemplates = () => async dispatch =>{
    const response = await fetch(`api/templates/`)
    const res = await response.json()
    dispatch(template_loading(res))
    return res
}

const templateReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD_TEMPLATES: {
            newState = state;
            newState.templates = action.templates
            return newState;
        }
        default:
            return state
    }
}

export default templateReducer;
