import React from 'react';
import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux-toolkit/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PieChart from './PieChart';

const FormResults: React.FC = () => {
    const formValues = useSelector((state: RootState) => state.form.formValues);
    const [tableData, setTableData] = useState<any[]>([]);
    const navigate = useNavigate();


    const columns = [
        {
            title: 'Ad',
            width: 100,
            dataIndex: 'ad',
            key: 'ad',
            fixed: 'left',
        },
        {
            title: 'Soyad',
            width: 100,
            dataIndex: 'soyad',
            key: 'soyad',
            fixed: 'left',
        },
        {
            title: 'Yaş',
            width: 100,
            dataIndex: 'yas',
            key: 'yas',
            fixed: 'left',
        },
        {
            title: 'Cinsiyet',
            width: 100,
            dataIndex: 'cinsiyet',
            key: 'cinsiyet',
            fixed: 'left',
        },
        {
            title: 'Kan Grubu',
            width: 100,
            dataIndex: 'kanGrubu',
            key: 'kanGrubu',
            fixed: 'left',
            render: (text: string, record: any) => `${text} ${record.kanGrubuRh}`,
        },
        {
            title: 'Geliş Nedeni',
            width: 100,
            dataIndex: 'gelisNedeni',
            key: 'gelisNedeni',
            fixed: 'left',
        },
        {
            title: 'Geliş Nedeni Açıklama',
            width: 250,
            dataIndex: 'gelisNedeniAciklama',
            key: 'gelisNedeniAciklama',
            fixed: 'left',
        },
        {
            title: 'Odada Bulunanlar',
            width: 100,
            dataIndex: 'odadaBulunanlar',
            key: 'odadaBulunanlar',
            fixed: 'left',
        },
        {
            title: 'Darp Drumu',
            width: 100,
            dataIndex: 'darpDurumu',
            key: 'darpDurumu',
            fixed: 'left',
        },
        {
            title: 'Organizasyon',
            width: 100,
            dataIndex: 'organizasyon',
            key: 'organizasyon',
            fixed: 'left',
        },
        {
            title: 'Şikayet',
            width: 100,
            dataIndex: 'sikayet',
            key: 'sikayet',
            fixed: 'left',
        },
        {
            title: 'Doktor Adı',
            width: 100,
            dataIndex: 'doktorAdi',
            key: 'doktorAdi',
            fixed: 'left',
        },
        {
            title: 'Uygun Ortam Sağlandı',
            width: 300,
            dataIndex: 'uygunOrtamSaglandi',
            key: 'uygunOrtamSaglandi',
            fixed: 'left',
            render: (text: boolean) => (text ? 'Evet' : 'Hayır'),
        },
        {
            title: '',
            key: 'action',
            fixed: 'left',
            render: (_text: string, record: any) => (
                <Button type="link" style={{ backgroundColor: 'red', color: 'white' }} danger onClick={() => handleDelete(record.key)}>Sil</Button>
            ),
        },
    ];

    const handleClick = () => {
        navigate('/hasta-bilgileri-formu');
    }

    const handleClearTable = () => {
        setTableData([]);
    };

    const handleDelete = (key: string) => {
        setTableData(prevData => prevData.filter(item => item.key !== key));
    }

    useEffect(() => {
        const newFormData = {
            key: Date.now().toString(),
            ad: formValues.ad,
            soyad: formValues.soyad,
            yas: formValues.yas,
            cinsiyet: formValues.cinsiyet,
            kanGrubu: formValues.kanGrubu,
            kanGrubuRh: formValues.kanGrubuRh,
            gelisNedeni: formValues.gelisNedeni,
            gelisNedeniAciklama: formValues.gelisNedeniAciklama,
            odadaBulunanlar: formValues.odadaBulunanlar.join(', '),
            darpDurumu: formValues.darpDurumu,
            organizasyon: formValues.organizasyon,
            sikayet: formValues.sikayet,
            doktorAdi: formValues.doktorAdi,
            uygunOrtamSaglandi: formValues.uygunOrtamSaglandi.toString(),
        };
        setTableData(prevData => [...prevData, newFormData]);
    }, [formValues]);

    return (
        <div>
            <div style={{ marginBottom: 50 }}>
                <h2>Form Sonuçları</h2>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                />
                <Button type="primary" onClick={handleClick}>Yeni Kayıt Ekle</Button>
                <Button type="primary" onClick={handleClearTable} danger>Tabloyu Temizle</Button>
            </div>

            <PieChart data={tableData} />
        </div>
    );
}

export default FormResults;
