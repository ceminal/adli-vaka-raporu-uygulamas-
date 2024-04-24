import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formValues: {
    ad: string;
    soyad: string;
    yas: number;
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
  };
}

const initialState: FormState = {
  formValues: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<any>) => {
      state.formValues = action.payload;
    },
  },
});

export const { setFormValues } = formSlice.actions;
export default formSlice.reducer;
