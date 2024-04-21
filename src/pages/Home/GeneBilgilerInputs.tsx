import { Space, Button, Select, Input, Switch } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Field, FieldInputProps, Form, Formik, FormikProps, FormikValues, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;

const validationSchema = Yup.object({
    gelisNedeni: Yup.string().required('Geliş Nedeni zorunlu').nullable(),
    sikayet: Yup.string().required('Açıklama ve Şikayet zorunlu'),
    odadaBulunanlar: Yup.array().min(1, 'En az bir seçenek seçilmelidir'),
    doktorAdi: Yup.string().required('Doktor Adı zorunlu'),
    organizasyon: Yup.string().required('Organizasyon zorunlu'),
    uygunOrtamSaglandi: Yup.boolean().oneOf([true], 'Uygun Ortam Sağlandı zorunlu').required(),
});



const GeneBilgilerInputs = () => {
    return (
        <Formik
            initialValues={{
                gelisNedeni: '',
                gelisNedeniAciklama: '',
                odadaBulunanlar: [],
                darpDurumu: false,
                organizasyon: '',
                sikayet: '',
                doktorAdi: '',
                uygunOrtamSaglandi: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form values:', values);
            }}
        >
            {() => (
                <Form>
                    <Space direction="vertical">
                        <label htmlFor="gelisNedeni">Geliş Nedeni</label>
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
                                    <Option value="etkiliEylem">Etkili Eylem</Option>
                                    <Option value="trafikKazasi">Trafik Kazası</Option>
                                    <Option value="isKazasi">İş Kazası</Option>
                                    <Option value="digerKazalar">Diğer Kazalar</Option>
                                    <Option value="insanHaklari">İnsan Hakları İhlali İddiası</Option>
                                    <Option value="intihar">İntihar Girişimi</Option>
                                    <Option value="zehirlenme">Zehirlenmeler</Option>
                                </Select>
                            )}
                        </Field>
                        <ErrorMessage name="gelisNedeni" component="div" className="error-message" />

                        <label htmlFor="sikayet">Açıklama ve Şikayet</label>
                        <Field name="sikayet" as={TextArea} />
                        <ErrorMessage name="sikayet" component="div" className="error-message" />

                        <label htmlFor="odadaBulunanlar">Odada Bulunanlar</label>
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
                                    <Option value="doktor">Tabip</Option>
                                    <Option value="saglikci">Sağlık Personeli</Option>
                                    <Option value="other">Sağlık Meslek Mensubu Personel</Option>
                                    <Option value="refakatci">Refakatçi</Option>
                                    <Option value="guvenlik">Güvenlik Görevlisi</Option>
                                </Select>
                            )}
                        </Field>
                        <ErrorMessage name="odadaBulunanlar" component="div" className="error-message" />

                        <label htmlFor="doktorAdi">Doktor Adı</label>
                        <Field name="doktorAdi" as={Input} />
                        <ErrorMessage name="doktorAdi" component="div" className="error-message" />

                        <label htmlFor="organizasyon">Organizasyon</label>
                        <Field name="organizasyon" as={Input} />
                        <ErrorMessage name="organizasyon" component="div" className="error-message" />

                        <label htmlFor="uygunOrtamSaglandi">Uygun Ortam Sağlandı</label>
                        <Field name="uygunOrtamSaglandi" type="checkbox">
                            {({ field, form }: { field: FieldInputProps<boolean>, form: FormikProps<FormikValues> }) => (
                                <Switch
                                    {...field}
                                    checked={field.value}
                                    onChange={(checked) => {
                                        form.setFieldValue("uygunOrtamSaglandi", checked);
                                    }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="uygunOrtamSaglandi" component="div" className="error-message" />

                        <Button type="primary" htmlType="submit">
                            Gönder
                        </Button>
                    </Space>
                </Form>
            )}
        </Formik>
    )
}

export default GeneBilgilerInputs;
