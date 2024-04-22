import { useSelector } from 'react-redux';
import { RootState } from '../../redux-toolkit/store';

const FormResults: React.FC = () => {

    const formValues = useSelector((state: RootState) => state.form.formValues);


    return (
        <div>
            <h2>Form Sonuçları</h2>
            <div>
                <h5>Hasta Bilgileri</h5>
                <p><b>Ad:</b> {formValues.ad}</p>
                <p><b>Soyad: </b>{formValues.soyad}</p>
                <p><b>Yas: </b>{formValues.yas}</p>
                <p><b>Cinsiyet:</b> {formValues.cinsiyet}</p>
                <p><b>Kan Grubu:</b> {formValues.kanGrubu} {formValues.kanGrubuRh}</p>

                <h5>Genel Bilgiler</h5>
                <p><b>Geliş Nedeni:</b> {formValues.gelisNedeni}</p>
                <p><b>Geliş Nedeni Açıklama: </b>{formValues.gelisNedeniAciklama}</p>
                <p><b>Odada Bulunanlar: </b>{formValues.odadaBulunanlar}</p>
                <p><b>Darp Durumu:</b> {formValues.darpDurumu}</p>
                <p><b>Organizasyon:</b> {formValues.organizasyon}</p>
                <p><b>Şikayet: </b>{formValues.sikayet}</p>
                <p><b>Doktor Adı:</b> {formValues?.doktorAdi}</p>
                <p><b>Uygu Ortam Sağlandı:</b> {formValues.uygunOrtamSaglandi}</p>
            </div>
        </div>
    )
}

export default FormResults