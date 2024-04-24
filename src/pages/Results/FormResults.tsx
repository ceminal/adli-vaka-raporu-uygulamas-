import React from 'react';
import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux-toolkit/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const FormResults: React.FC = () => {
    const form = useSelector((state: RootState) => state.form.formValues);
    const navigate = useNavigate();
    console.log(form);
    const [data, setData] = useState<any[]>(form ? [form] : [])

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
        },
    ];
   
    const handleClick = () => {
        navigate('/hasta-bilgileri-formu');
    }

    const handleClearTable = () => {
        setData([]);
    };

    return (
        <div>
            <div style={{ marginBottom: 50 }}>
                <h2>Form Sonuçları</h2>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowKey={(record) => record.id}               
                />
                <Button type="primary" onClick={handleClick}>Yeni Kayıt Ekle</Button>
                <Button type="primary" onClick={handleClearTable} danger>Tabloyu Temizle</Button>
            </div>
        </div>
    );

}
export default FormResults;

