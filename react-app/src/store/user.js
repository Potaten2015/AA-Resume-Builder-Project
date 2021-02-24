const SAVE_USER = 'user/SAVE_USER';

const save_user = (user) => ({
  type: SAVE_USER,
  user,
});

export const saveUser = (user) => async (dispatch) => {
  await dispatch(save_user(user));
  return;
};

const userReducer = (state = null, action) => {
  let newState;
  switch (action.type) {
    case SAVE_USER: {
      newState = Object.assign({}, state);
      newState = action.user;
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
