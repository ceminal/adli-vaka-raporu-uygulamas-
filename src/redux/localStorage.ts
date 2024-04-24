
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


export const saveState = (formValues: FormState) => {
    localStorage.setItem('formValues', JSON.stringify(formValues));
};

export const loadState = () => {
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
        return JSON.parse(storedFormValues);
    }
    return null;
};