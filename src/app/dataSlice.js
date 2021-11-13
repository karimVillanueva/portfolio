import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getData } from './fetchData'


// initialState
const initialState = {
  data: {
    hdurl:' ',
    explanation:'',
    status: 'Initial'
  }
  };

//Creation of AsynThunk

export const fetchNasaData = createAsyncThunk(
  'data/fetchNasaData',
  async () => {
    const res = await getData();
    return res;

  }
)

// Creation of Slice

 const dataSlice = createSlice({
  name: 'data',
  initialState,
   extraReducers: (builder) => {
    builder
      .addCase(fetchNasaData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchNasaData.fulfilled, (state, action) => {
        state.status = 'completed';
        state.data = action.payload;
      });
  },
})


// Action creators are generated for each case reducer function
//export const { nombreReducers } = dataSlice.actions

export default dataSlice.reducer 
