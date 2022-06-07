import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'Config/Axios';
import { showSnackbar } from 'Services/Snackbar/Snackbar.slices';
import handleError from 'Utils/handleError';
import { IRFrealEstates } from '../../Types/Dashboard/Dashboard.types';
import convertToBase64 from 'Utils/convertFileToBase64';

export const getRealEstates: any = createAsyncThunk(
  'getRealEstates',
  async () => {
    try {
      const res = (await axios.get('/real-estate')).data;
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const addNewRealEstate = createAsyncThunk(
  'addNewRealEstate',
  async (values: IRFrealEstates, { dispatch }) => {
    // const body = {
    //   title: values.title,
    //   description: values.description,
    //   address: values.address,
    //   country: values.country,
    //   price: values.price,
    //   status: values.status
    // };

    // const formData: any = new FormData();

    // values.images.forEach((element: any) => {
    //   formData.append('images', element);
    // });
    // formData.append('form', JSON.stringify(body));

    try {
      // await axios.post('dashboard/create-real-estate', formData, {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // });
      return 'worked';
    } catch (error) {
      return dispatch(showSnackbar(handleError(error)));
    }
  }
);

// export const addNewRealEstate =
//   (values: IRFrealEstates) =>
//   async (dispatch: Dispatch<RealEstatesDispatchTypes>) => {
//     dispatch({
//       type: ACTIONS.ADD_NEW_REAL_STATE_REQUEST
//     });

//     const body = {
//       title: values.title,
//       description: values.description,
//       address: values.address,
//       country: values.country,
//       price: values.price,
//       status: values.status
//     };

//     const formData: any = new FormData();

//     values.images.forEach((element: any) => {
//       formData.append('images', element);
//     });
//     formData.append('form', JSON.stringify(body));

//     try {
//       await axios.post('dashboard/create-real-estate', formData, {
//         headers: {
//           'content-type': 'multipart/form-data'
//         }
//       });
//       dispatch({
//         type: ACTIONS.ADD_NEW_REAL_STATE_SUCCESS
//       });
//     } catch (error) {
//       dispatch({
//         type: ACTIONS.ADD_NEW_REAL_STATE_ERROR
//       });
//     }
//   };
