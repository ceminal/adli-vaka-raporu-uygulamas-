import { ErrorMessage, Field, FieldInputProps, Form, Formik, FormikProps, FormikValues, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Cascader, Space, Input, Select, Switch, Button, Radio, Col, Divider, Row } from 'antd';
import './FormInputs.scss';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { setTableData } from '../../redux/slices/tableDataSlice';
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../../interfaces/formData';
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer';
import { RootState } from '../../redux/store';

const { Option } = Select;
const bloodGroupOptions = [
    {
        value: 'A',
        label: 'A',
        children: [
            {
                value: '+',
                label: '+',
            },
            {
                value: '-',
                label: '-',
            },
        ],
    },
    {
        value: 'B',
        label: 'B',
        children: [
            {
                value: '+',
                label: '+',
            },
            {
                value: '-',
                label: '-',
            },
        ],
    },
    {
        value: 'AB',
        label: 'AB',
        children: [
            {
                value: '+',
                label: '+',
            },
            {
                value: '-',
                label: '-',
            },
        ],
    },
    {
        value: '0',
        label: '0',
        children: [
            {
                value: '+',
                label: '+',
            },
            {
                value: '-',
                label: '-',
            },
        ],
    },
];

const validationSchema = Yup.object({
    ad: Yup.string().required('Ad alanı zorunludur').min(3, 'Ad en az 3 karakter veya daha uzun olmalı').matches(/^[A-Za-z\s]*$/, 'Ad sadece harf içermelidir'),
    soyad: Yup.string().required('Soyad alanı zorunludur').max(20, 'Soyad en fazla 20 karakter uzunluğunda olmalı').matches(/^[A-Za-z\s]*$/, 'Soyad sadece harf içermelidir'),
    yas: Yup.number().required('Yaş alanı zorunludur').positive('Yaş sıfırdan büyük bir sayı olmalıdır').integer('Yaş tam sayı olmalıdır').max(150, 'Yaş 150\'den büyük olamaz'),
    cinsiyet: Yup.string().required('Cinsiyet alanı zorunludur'),
    kanGrubu: Yup.string().required('Kan grubu alanı zorunludur'),
    kanGrubuRh: Yup.string().required('Rh alanı zorunludur'),
    gelisNedeni: Yup.string().required('Geliş Nedeni zorunludur').nullable(),
    sikayet: Yup.string().required('Şikayet alanı zorunludur').min(25, 'Minimum 25 karakter olmalıdır'),
    gelisNedeniAciklama: Yup.string().min(25, 'Minimum 25 karakter olmalıdır'),
    odadaBulunanlar: Yup.array().min(1, 'En az bir seçenek seçilmelidir'),
    doktorAdi: Yup.string().required('Doktor Adı zorunludur').min(3, 'Ad en az 3 karakter veya daha uzun olmalı').matches(/^[A-Za-z\s]*$/, 'Doktor Adı sadece harf içermelidir'),
    organizasyon: Yup.string().required('Organizasyon zorunludur'),
    darpDurumu: Yup.string().required('Darp durumu seçiniz.'),
});

const FormInputs: React.FC = () => {
    const tableData = useSelector((state: RootState) => state.table.tableData)
    const [displayValue, setDisplayValue] = useState<string>('');
    const [showAdditionalFields, setShowAdditionalFields] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ContinueButton = () => {
        const { values } = useFormikContext<FormikValues>();
        const isDisabled = !values.darpDurumu;

        return (
            <Button type="primary" onClick={() => setShowAdditionalFields(true)} style={{ marginTop: 20 }} disabled={isDisabled}>
                Devam
            </Button>
        );
    };

    return (
        <>
            <Header title='Adli Vaka Raporu' />
            <div className="formContainer">
                <Formik
                    initialValues={{
                        id: '',
                        ad: '',
                        soyad: '',
                        yas: 0,
                        cinsiyet: '',
                        kanGrubu: '',
                        kanGrubuRh: '',
                        gelisNedeni: '',
                        gelisNedeniAciklama: '',
                        odadaBulunanlar: [],
                        darpDurumu: false,
                        organizasyon: '',
                        sikayet: '',
                        doktorAdi: '',
                        uygunOrtamSaglandi: false,
                    } as IFormData}

                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        const randomId = "id_" + Math.random().toString(36).substring(2, 9);
                        const updatedValues = { ...values, id: randomId };
                        dispatch(setTableData([...tableData, updatedValues]));
                        setSubmitting(false);
                        navigate("/");
                    }}
                >
                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <Space direction="vertical">
                                <Divider orientation="left">Hasta Bilgileri</Divider>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                        <label htmlFor="ad">Ad</label>
                                        <Field name="ad" as={Input} />
                                        <ErrorMessage name="ad" component="div" className="error-message" />
                                    </Col>
                                    <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                        <label htmlFor="soyad">Soyad</label>
                                        <Field name="soyad" as={Input} />
                                        <ErrorMessage name="soyad" component="div" className="error-message" />
                                    </Col>
                                    <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                        <label htmlFor="yas">Yaş</label>
                                        <Field name="yas" as={Input} type="number" />
                                        <ErrorMessage name="yas" component="div" className="error-message" />
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                        <Field name="cinsiyet">
                                            {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormikValues> }) => (
                                                <Select
                                                    {...field}
                                                    showSearch
                                                    placeholder="Cinsiyet Seçiniz"
                                                    optionFilterProp="children"
                                                    onChange={(value) => form.setFieldValue(field.name, value)}
                                                    onBlur={() => form.setFieldTouched(field.name, true)}
                                                >
                                                    <Option value="">Cinsiyet Seçiniz</Option>
                                                    <Option value="Kadın">Kadın</Option>
                                                    <Option value="Erkek">Erkek</Option>
                                                </Select>
                                            )}
                                        </Field>
                                        <ErrorMessage name="cinsiyet" component="div" className="error-message" />
                                    </Col>
                                    <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>

                                        <Field
                                            name="kanGrubuRh"
                                            as={Cascader}
                                            placeholder="Kan Grubu"
                                            options={bloodGroupOptions}
                                            displayRender={(labels: string[]) => labels.join(' ')}
                                            onChange={(values: string[]) => {
                                                const displayValue = values.join(' ');
                                                setFieldValue('kanGrubu', values[0]);
                                                setFieldValue('kanGrubuRh', values[1]);
                                                setDisplayValue(displayValue);
                                            }}
                                            value={displayValue}
                                        />
                                        <ErrorMessage name="kanGrubu" component="div" className="error-message" />
                                        <ErrorMessage name="kanGrubuRh" component="div" className="error-message" />
                                    </Col>
                                </Row>

                                <Divider orientation="left">Genel Bilgiler</Divider>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                        <label htmlFor="darpDurumu">Darp Durumu</label>
                                        <Space>
                                            <Field name="darpDurumu" type="radio" value="Evet" as={Radio}>Evet</Field>
                                            <Field name="darpDurumu" type="radio" value="Hayır" as={Radio}>Hayır</Field>
                                        </Space>
                                        <ErrorMessage name="darpDurumu" component="div" className="error-message" />
                                        <ContinueButton />
                                    </Col>
                                </Row>
                                {showAdditionalFields && (
                                    <Row id="hiddenForm" gutter={16}>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <Field name="gelisNedeni">
                                                {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormikValues> }) => (
                                                    <Select
                                                        {...field}
                                                        showSearch
                                                        placeholder="Geliş Nedeni Seçiniz"
                                                        optionFilterProp="children"
                                                        onChange={(value) => form.setFieldValue(field.name, value)}
                                                        onBlur={() => form.setFieldTouched(field.name, true)}
                                                    >
                                                        <Option value="">Geliş Nedeni Seçiniz</Option>
                                                        <Option value="Etkili Eylem">Etkili Eylem</Option>
                                                        <Option value="Trafik Kazası">Trafik Kazası</Option>
                                                        <Option value="İş Kazası">İş Kazası</Option>
                                                        <Option value="Diğer Kazalar">Diğer Kazalar</Option>
                                                        <Option value="İnsan Hakları İhlali İddiası">İnsan Hakları İhlali İddiası</Option>
                                                        <Option value="İntihar Girişimi">İntihar Girişimi</Option>
                                                        <Option value="Zehirlenmeler">Zehirlenmeler</Option>
                                                    </Select>
                                                )}
                                            </Field>
                                            <ErrorMessage name="gelisNedeni" component="div" className="error-message" />
                                        </Col>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <label htmlFor="gelisNedeniAciklama">Geliş Nedeni Açıklama</label>
                                            <Field name="gelisNedeniAciklama" as={TextArea} />
                                            <ErrorMessage name="gelisNedeniAciklama" component="div" className="error-message" />
                                        </Col>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <label htmlFor="sikayet">Şikayet</label>
                                            <Field name="sikayet" as={TextArea} />
                                            <ErrorMessage name="sikayet" component="div" className="error-message" />
                                        </Col>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <Field name="odadaBulunanlar">
                                                {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormikValues> }) => (
                                                    <Select
                                                        {...field}
                                                        showSearch
                                                        mode="multiple"
                                                        placeholder="Odada Bulunanları Seçiniz"
                                                        optionFilterProp="children"
                                                        onChange={(value) => form.setFieldValue(field.name, value)}
                                                        onBlur={() => form.setFieldTouched(field.name, true)}
                                                    >
                                                        <Option value="">Odada Bulunanlar</Option>
                                                        <Option value="Tabip">Tabip</Option>
                                                        <Option value="Sağlık Personeli">Sağlık Personeli</Option>
                                                        <Option value="Sağlık Meslek Mensubu Personel">Sağlık Meslek Mensubu Personel</Option>
                                                        <Option value="Refakatçi">Refakatçi</Option>
                                                        <Option value="Güvenlik Görevlisi">Güvenlik Görevlisi</Option>
                                                    </Select>
                                                )}
                                            </Field>
                                            <ErrorMessage name="odadaBulunanlar" component="div" className="error-message" />
                                        </Col>

                                    </Row>
                                )}
                                {showAdditionalFields && (
                                    <Row id="hiddenForm" gutter={16}>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <label htmlFor="doktorAdi">Doktor Adı</label>
                                            <Field name="doktorAdi" as={Input} />
                                            <ErrorMessage name="doktorAdi" component="div" className="error-message" />
                                        </Col>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <label htmlFor="organizasyon">Organizasyon</label>
                                            <Field name="organizasyon" as={Input} />
                                            <ErrorMessage name="organizasyon" component="div" className="error-message" />
                                        </Col>
                                        <Col className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
                                            <div>
                                                <label htmlFor="uygunOrtamSaglandi">Uygun Ortam Sağlandı</label>
                                                <Field name="uygunOrtamSaglandi" type="checkbox">
                                                    {({ field, form }: { field: FieldInputProps<boolean>, form: FormikProps<FormikValues> }) => (
                                                        <Switch
                                                            {...field}
                                                            style={{ width: 50, marginLeft: 10 }}
                                                            checked={field.value}
                                                            onChange={(checked) => {
                                                                form.setFieldValue("uygunOrtamSaglandi", checked);
                                                            }}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="uygunOrtamSaglandi" component="div" className="error-message" />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24} xs={24} sm={12} md={8} lg={6}>
                                            <Button type="primary" htmlType="submit" style={{ marginTop: 20 }} >
                                                Gönder
                                            </Button>
                                        </Col>

                                    </Row>
                                )}
                            </Space>
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer info='React Task 2024' />
        </>
    );
};

export default FormInputs;
