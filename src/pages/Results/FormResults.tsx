import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { deleteRow, clearTable } from '../../redux/slices/tableDataSlice';
import PieChart from './PieChart';

const FormResults: React.FC = () => {
    const tableData = useSelector((state: RootState) => state.table.tableData)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log('tableData', tableData);

    const handleClick = () => {
        navigate('/form-inputs');
    }

    const columns = [
        { title: 'Ad', dataIndex: 'ad', key: 'ad', fixed: 'left' },
        { title: 'Soyad', dataIndex: 'soyad', key: 'soyad', fixed: 'left' },
        { title: 'Yaş', dataIndex: 'yas', key: 'yas', fixed: 'left' },
        { title: 'Cinsiyet', dataIndex: 'cinsiyet', key: 'cinsiyet', fixed: 'left' },
        {
            title: 'Kan Grubu', dataIndex: 'kanGrubu', key: 'kanGrubu', fixed: 'left',
            render: (text, record) => `${record.kanGrubu} ${record.kanGrubuRh}`
        },
        { title: 'Geliş Nedeni', dataIndex: 'gelisNedeni', key: 'gelisNedeni', fixed: 'left' },
        { title: 'Geliş Nedeni Açıklama', dataIndex: 'gelisNedeniAciklama', key: 'gelisNedeniAciklama', fixed: 'left' },
        {
            title: 'Odada Bulunanlar', dataIndex: 'odadaBulunanlar', key: 'odadaBulunanlar', fixed: 'left',
            render: text => (text.join(', '))
        },
        {
            title: 'Darp Durumu', dataIndex: 'darpDurumu', key: 'darpDurumu', fixed: 'left',
            render: (text) => (text ? 'Evet' : 'Hayır')
        },
        { title: 'Organizasyon', dataIndex: 'organizasyon', key: 'organizasyon', fixed: 'left' },
        { title: 'Şikayet', dataIndex: 'sikayet', key: 'sikayet', fixed: 'left' },
        { title: 'Doktor Adı', dataIndex: 'doktorAdi', key: 'doktorAdi', fixed: 'left' },
        {
            title: 'Uygun Ortam Sağlandı', dataIndex: 'uygunOrtamSaglandi', key: 'uygunOrtamSaglandi', fixed: 'left',
            render: (text) => (text ? 'Evet' : 'Hayır')
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
        <div>
            <div>
                <div style={{ marginBottom: 50 }}>
                    <h2>Form Sonuçları</h2>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                        rowKey="id"
                    />
                    <Button type="primary" onClick={handleClick}>Yeni Kayıt Ekle</Button>
                    <Button type="primary" onClick={handleDeleteAll} danger>Tabloyu Temizle</Button>
                </div>
            </div>
            <PieChart data={chartData} />
        </div>
    );
};

export default FormResults;
