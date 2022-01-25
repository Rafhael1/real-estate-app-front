import axios from '../../../Config/api';

import { Dispatch } from 'redux';
import {
  RealEstatesDispatchTypes,
  ACTIONS,
  IRFrealEstates
} from './dashboard.types';

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

    const data = {
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
    formData.append('data', JSON.stringify(data));

    try {
      await axios.post('dashboard/create-real-estate', formData, {
        data: JSON.stringify(data)
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
