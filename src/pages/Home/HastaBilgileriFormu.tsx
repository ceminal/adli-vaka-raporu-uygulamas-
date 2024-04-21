import { ErrorMessage, Field, FieldInputProps, Form, Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Cascader, Button, Space, Input, Select } from 'antd';
import './HastaBilgileriFormu.scss';
import { useState } from 'react';
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
    ad: Yup.string().required('Ad alanı zorunludur').min(3, 'Ad en az 3 karakter veya daha uzun olmalı'),
    soyad: Yup.string().required('Soyad alanı zorunludur').max(20, 'Soyad en fazla 20 karakter uzunluğunda olmalı'),
    yas: Yup.number().required('Yaş alanı zorunludur').positive().integer(),
    cinsiyet: Yup.string().required('Cinsiyet alanı zorunludur'),
    kanGrubu: Yup.string().required('Kan grubu alanı zorunludur'),
    kanGrubuRh: Yup.string().required('Rh alanı zorunludur'),
});



const HastaBilgileriFormu = () => {
    const [displayValue, setDisplayValue] = useState<string>('');

    return (
        <div className="formContainer">
            <h5 className='patientInfoTitle' >Hasta Bilgileri</h5>
            <Formik
                initialValues={{
                    ad: '',
                    soyad: '',
                    yas: '',
                    cinsiyet: '',
                    kanGrubu: [],
                    kanGrubuRh: [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting, handleSubmit, setFieldValue }) => (
                    <Form onSubmit={handleSubmit}>
                        <Space direction="vertical">
                            <label htmlFor="ad">Ad</label>
                            <Field name="ad" as={Input} />
                            <ErrorMessage name="ad" component="div" className="error-message" />

                            <label htmlFor="soyad">Soyad</label>
                            <Field name="soyad" as={Input} />
                            <ErrorMessage name="soyad" component="div" className="error-message" />

                            <label htmlFor="yas">Yaş</label>
                            <Field name="yas" as={Input} type="number" />
                            <ErrorMessage name="yas" component="div" className="error-message" />


                            <label htmlFor="cinsiyet">Cinsiyet</label>
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

                            <label htmlFor="kanGrubuRh">Kan Grubu ve Rh</label>
                            <Field
                                name="kanGrubuRh"
                                as={Cascader}
                                placeholder="Kan Grubu"
                                options={bloodGroupOptions}
                                displayRender={(labels: string[]) => labels.join(' ')}
                                onChange={(values: string[]) => {
                                    console.log('Seçilen kan grubu ve Rh:', values);
                                    const displayValue = values.join(' ');
                                    setFieldValue('kanGrubu', values[0]);
                                    setFieldValue('kanGrubuRh', values[1]);
                                    setDisplayValue(displayValue);
                                }}
                                value={displayValue}
                            />
                            <ErrorMessage name="kanGrubu" component="div" className="error-message" />
                            <ErrorMessage name="kanGrubuRh" component="div" className="error-message" />

                            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                                Gönder
                            </Button>
                        </Space>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default HastaBilgileriFormu;
