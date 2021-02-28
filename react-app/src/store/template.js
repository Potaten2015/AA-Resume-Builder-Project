const LOAD_TEMPLATES = 'template/LOAD_TEMPLATES';
const CURRENT_TEMPLATE = 'template/CURRENT_TEMPLATE';
const CLEAR_TEMPLATES = 'template/CLEAR_TEMPLATES';
const LOAD_STYLES = 'template/LOAD_STYLES'

const template_loading = (templates) => ({
  type: LOAD_TEMPLATES,
  templates,
});

const current_template = (template) => ({
  type: CURRENT_TEMPLATE,
  template,
});

const clear_templates = () => ({
  type: CLEAR_TEMPLATES,
});

const load_styles = (styles) => ({
  type: LOAD_STYLES,
  styles
});

export const getTemplates = () => async (dispatch) => {
  const response = await fetch(`/api/templates/`);
  const res = await response.json();
  dispatch(template_loading(res));
  return res;
};

export const clearTemplates = () => async (dispatch) => {
  await dispatch(clear_templates());
  return;
};

export const loadStyles = () => async (dispatch) => {
  const response = await fetch(`/api/templates/styles`)
  const res = await response.json();
  dispatch(load_styles(res))
  return;
}

export const updateCurrentTemplate = (template) => async (dispatch) =>
  dispatch(current_template(template));

const templateReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_TEMPLATES: {
      newState = Object.assign({}, state);
      newState.templates = action.templates;
      return newState;
    }
    case CURRENT_TEMPLATE: {
      newState = Object.assign({}, state);
      newState.current = action.template;
      return newState;
    }
    case CLEAR_TEMPLATES: {
      newState = {};
      return newState;
    }
    case LOAD_STYLES: {
      newState = Object.assign({}, state);
      newState.styles = action.styles
      return newState;
    }
    default:
      return state;
  }
};

export default templateReducer;
