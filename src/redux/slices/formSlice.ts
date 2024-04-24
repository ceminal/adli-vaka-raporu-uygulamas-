import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IFormData } from '../../interfaces/formData';

interface FormData {
  formData: IFormData | null;
}


const initialState: FormData = {
  formData: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<FormData>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState
  }
});

export const { setFormValues, resetForm } = formSlice.actions;
export const selectFormData = (state: RootState) => state.form;

export default formSlice.reducer;
