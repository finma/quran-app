import * as types from "../types";

const initialState: InitialState = {
  surahList: [],
  surah: {},
};

interface InitialState {
  surahList: Array<object>;
  surah: object;
}

export const surahReducer = (
  state = initialState,
  action: { type: string; payload?: object | Array<object> }
) => {
  switch (action.type) {
    case types.GET_SURAH_LIST:
      return {
        ...state,
        surahList: action.payload,
      };
    case types.GET_DETAIL_SURAH:
      return {
        ...state,
        surah: action.payload,
      };
    case types.DELETE_SURAH:
      return {
        ...state,
        surah: action.payload,
      };
    default:
      return { ...state };
  }
};
