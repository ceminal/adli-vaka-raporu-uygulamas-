import { useSelector } from 'react-redux';
import { selectFormData } from '../../redux/slices/formSlice';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const FormResults: React.FC = () => {
    const formData = useSelector(selectFormData);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/form-inputs');
    }

    const columns = [
        { title: 'Ad', dataIndex: 'ad', key: 'ad', fixed: 'left' },
        { title: 'Soyad', dataIndex: 'soyad', key: 'soyad', fixed: 'left' },
        { title: 'Yaş', dataIndex: 'yas', key: 'yas', fixed: 'left' },
        { title: 'Cinsiyet', dataIndex: 'cinsiyet', key: 'cinsiyet', fixed: 'left' },
        { title: 'Kan Grubu', dataIndex: 'kanGrubu', key: 'kanGrubu', fixed: 'left',
          render: (text, record) => `${record.kanGrubu} ${record.kanGrubuRh}` },
        { title: 'Geliş Nedeni', dataIndex: 'gelisNedeni', key: 'gelisNedeni', fixed: 'left' },
        { title: 'Geliş Nedeni Açıklama', dataIndex: 'gelisNedeniAciklama', key: 'gelisNedeniAciklama', fixed: 'left' },
        { title: 'Odada Bulunanlar', dataIndex: 'odadaBulunanlar', key: 'odadaBulunanlar', fixed: 'left',
          render: text => (text.join(', ')) },
        { title: 'Darp Durumu', dataIndex: 'darpDurumu', key: 'darpDurumu', fixed: 'left',
          render: (text) => (text ? 'Evet' : 'Hayır') },
        { title: 'Organizasyon', dataIndex: 'organizasyon', key: 'organizasyon', fixed: 'left' },
        { title: 'Şikayet', dataIndex: 'sikayet', key: 'sikayet', fixed: 'left' },
        { title: 'Doktor Adı', dataIndex: 'doktorAdi', key: 'doktorAdi', fixed: 'left' },
        { title: 'Uygun Ortam Sağlandı', dataIndex: 'uygunOrtamSaglandi', key: 'uygunOrtamSaglandi', fixed: 'left',
          render: (text) => (text ? 'Evet' : 'Hayır') },
        { title: '', key: 'action', fixed: 'left' }
    ];

    const dataSource = [formData];
   

    return (
        <div>
            <div>
            <div style={{ marginBottom: 50 }}>
                <h2>Form Sonuçları</h2>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    rowKey="id"      
                />
                <Button type="primary" onClick={handleClick}>Yeni Kayıt Ekle</Button>
                <Button type="primary" danger>Tabloyu Temizle</Button>
            </div>
        </div>
           
        </div>
    );
};

export default FormResults;
