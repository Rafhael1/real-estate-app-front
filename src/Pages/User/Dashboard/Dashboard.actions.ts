import axios from '../../../Config/Axios';

import { Dispatch } from 'redux';
import {
  RealEstatesDispatchTypes,
  ACTIONS,
  IRFrealEstates
} from './Dashboard.types';

export const getRealEstates =
  () => async (dispatch: Dispatch<RealEstatesDispatchTypes>) => {
    dispatch({
      type: ACTIONS.GET_REAL_ESTATES_REQUEST
    });
    try {
      const res = await axios.get('/image');

      dispatch({
        type: ACTIONS.GET_REAL_ESTATES_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_REAL_ESTATES_ERROR
      });
    }
  };

export const addNewRealEstate =
  (values: IRFrealEstates) =>
  async (dispatch: Dispatch<RealEstatesDispatchTypes>) => {
    dispatch({
      type: ACTIONS.ADD_NEW_REAL_STATE_REQUEST
    });

    const body = {
      title: values.title,
      description: values.description,
      address: values.address,
      country: values.country,
      price: values.price,
      status: values.status
    };

    const formData: any = new FormData();

    values.images.forEach((element: any) => {
      formData.append('images', element);
    });
    formData.append('form', JSON.stringify(body));

    try {
      await axios.post('dashboard/create-real-estate', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      dispatch({
        type: ACTIONS.ADD_NEW_REAL_STATE_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.ADD_NEW_REAL_STATE_ERROR
      });
    }
  };
