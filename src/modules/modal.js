const SHOW_MODAL = 'modal/SHOW_MODAL';
const HIDE_MODAL = 'modal/HIDE_MODAL';

export const showModal = (info) => ({
  type: SHOW_MODAL,
  payload: info,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

const initialState = {
  visible: false,
  mode: null, //alert, detail
  content: null,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
        mode: action.payload.mode,
        content: action.payload.content,
      };
    case HIDE_MODAL:
      return {
        initialState,
      };
    default:
      return state;
  }
}
