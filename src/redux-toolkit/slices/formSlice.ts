import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormValues {
  ad: string;
  soyad: string;
  yas: string;
  cinsiyet: string;
  kanGrubu: string[];
  kanGrubuRh: string[];
  gelisNedeni: string;
  gelisNedeniAciklama: string;
  odadaBulunanlar: string[];
  darpDurumu: boolean;
  organizasyon: string;
  sikayet: string;
  doktorAdi: string;
  uygunOrtamSaglandi: boolean;
}

interface FormState {
  formValues: FormValues | null; 
}

const initialState: FormState = {
  formValues: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<FormValues>) => {
      state.formValues = action.payload;
    },
  },
});

export const { setFormValues } = formSlice.actions;

export const formReducer = formSlice.reducer;
