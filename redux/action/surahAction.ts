import axios from "axios";
import { DELETE_SURAH, GET_DETAIL_SURAH, GET_SURAH_LIST } from "../types";

export const getSurah = () => (dispatch: any) => {
  axios
    .get("https://api.quran.sutanlab.id/surah")
    .then((result) => {
      dispatch({ type: GET_SURAH_LIST, payload: result.data.data });
    })
    .catch((err) => console.log(err));
};

export const getDetailSurah = (surahId: string) => (dispatch: any) => {
  axios
    .get(`https://api.quran.sutanlab.id/surah/${surahId}`)
    .then((result) => {
      dispatch({ type: GET_DETAIL_SURAH, payload: result.data.data });
    })
    .catch((err) => console.log(err));
};

export const deleteSurah = () => (dispatch: any) => {
  return dispatch({ type: DELETE_SURAH, payload: {} });
};
