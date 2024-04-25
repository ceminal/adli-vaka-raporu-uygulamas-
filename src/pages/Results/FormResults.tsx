import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import Header from '../../layouts/Header/Header'
import { deleteRow, clearTable } from '../../redux/slices/tableDataSlice';
import './FormResults.scss';
import PieChart from './PieChart';
import Footer from '../../layouts/Footer/Footer';

const FormResults: React.FC = () => {
    const tableData = useSelector((state: RootState) => state.table.tableData)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate('/form-inputs');
    }

    const bloodTypeFilters = [
        { text: 'A+', value: 'A +' },
        { text: 'A-', value: 'A -' },
        { text: 'B+', value: 'B +' },
        { text: 'B-', value: 'B -' },
        { text: 'AB+', value: 'AB +' },
        { text: 'AB-', value: 'AB -' },
        { text: '0+', value: '0 +' },
        { text: '0-', value: '0 -' }
    ];

    const columns = [
        { title: 'Ad', dataIndex: 'ad', key: 'ad', fixed: 'left' },
        { title: 'Soyad', dataIndex: 'soyad', key: 'soyad', fixed: 'left' },
        { title: 'Yaş', dataIndex: 'yas', key: 'yas', fixed: 'left' },
        {
            title: 'Cinsiyet',
            dataIndex: 'cinsiyet',
            key: 'cinsiyet',
            fixed: 'left',
            filters: [
                { text: 'Erkek', value: 'Erkek' },
                { text: 'Kadın', value: 'Kadın' }
            ],
            onFilter: (value, record) => record.cinsiyet === value
        },
        {
            title: 'Kan Grubu',
            dataIndex: 'kanGrubu',
            key: 'kanGrubu',
            fixed: 'left',
            render: (text, record) => `${record.kanGrubu} ${record.kanGrubuRh}`,
            filters: bloodTypeFilters,
            onFilter: (value, record) => `${record.kanGrubu} ${record.kanGrubuRh}` === value

        },
        {
            title: 'Geliş Nedeni',
            dataIndex: 'gelisNedeni',
            key: 'gelisNedeni',
            fixed: 'left',
            filters: [
                { text: 'Etkili Eylem', value: 'Etkili Eylem' },
                { text: 'Trafik Kazası', value: 'Trafik Kazası' },
                { text: 'İş Kazası', value: 'İş Kazası' },
                { text: 'Diğer Kazalar', value: 'Diğer Kazalar' },
                { text: 'İnsan Hakları İhlali İddiası', value: 'İnsan Hakları İhlali İddiası' },
                { text: 'İntihar Girişimi', value: 'İntihar Girişimi' },
                { text: 'Zehirlenmeler', value: 'Zehirlenmeler' },

            ],
            onFilter: (value, record) => record.gelisNedeni === value
        },

        { title: 'Geliş Nedeni Açıklama', dataIndex: 'gelisNedeniAciklama', key: 'gelisNedeniAciklama', fixed: 'left' },
        {
            title: 'Odada Bulunanlar',
            dataIndex: 'odadaBulunanlar',
            key: 'odadaBulunanlar',
            fixed: 'left',
            render: text => (text.join(', ')),
            filters: [
                { text: 'Tabip', value: 'Tabip' },
                { text: 'Sağlık Personeli', value: 'Sağlık Personeli' },
                { text: 'Sağlık Meslek Mensubu Personel', value: 'Sağlık Meslek Mensubu Personel' },
                { text: 'Refakatçi', value: 'Refakatçi' },
                { text: 'Güvenlik Görevlisi', value: 'Güvenlik Görevlisi' },
            ],
            onFilter: (value, record) => record.odadaBulunanlar === value
        },
        {
            title: 'Darp Durumu',
            dataIndex: 'darpDurumu',
            key: 'darpDurumu',
            fixed: 'left',
            render: (text) => (text ? 'Evet' : 'Hayır'),
            filters: [
                { text: 'Evet', value: 'Evet' },
                { text: 'Hayır', value: 'Hayır' },
            ],
            onFilter: (value, record) => record.darpDurumu === value
        },
        { title: 'Organizasyon', dataIndex: 'organizasyon', key: 'organizasyon', fixed: 'left' },
        { title: 'Şikayet', dataIndex: 'sikayet', key: 'sikayet', fixed: 'left' },
        { title: 'Doktor Adı', dataIndex: 'doktorAdi', key: 'doktorAdi', fixed: 'left' },
        {
            title: 'Uygun Ortam Sağlandı',
            dataIndex: 'uygunOrtamSaglandi',
            key: 'uygunOrtamSaglandi',
            fixed: 'left',
            render: (text) => (text ? 'Evet' : 'Hayır'),
            filters: [
                { text: 'Evet', value: true },
                { text: 'Hayır', value: false }
            ],
            onFilter: (value, record) => record.uygunOrtamSaglandi === value,
        },
        {
            title: '', key: 'action', fixed: 'left',
            render: (_, record) => (
                <Button type="primary" danger onClick={() => handleDeleteRow(record.id)}>
                    Sil
                </Button>
            )
        }
    ];

    const handleDeleteRow = (id) => {
        dispatch(deleteRow(id));
    };

    const handleDeleteAll = () => {
        dispatch(clearTable());
    }
    const organizationData = tableData.reduce((acc, { organizasyon }) => {
        acc[organizasyon] = (acc[organizasyon] || 0) + 1;
        return acc;
    }, {});
    const chartData = Object.entries(organizationData).map(([key, value]) => ({
        organizasyon: key,
        count: value
    }));

    return (
        <>
            <Header title='Adli Vaka Rapor Tablosu' />
            <div className='tableContainer'>
                <div className='formResultsTable'>
                    <h4 className='tableTitle' >Form Sonuçları</h4>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        pagination={{ pageSize: 5 }}
                        scroll={{ x: 'max-content' }}
                        style={{ width: '100%' }}
                        rowKey="id"
                    />
                    <Button type="primary" className='green' onClick={handleClick}>Yeni Kayıt Ekle</Button>
                    <Button type="primary" onClick={handleDeleteAll} danger>Tabloyu Temizle</Button>
                </div>
                <div className="chartContainer">
                    <PieChart data={chartData} />
                </div>
            </div>
            <Footer info='React Task 2024' />
        </>
    );
};

export default FormResults;
