import { Space, Radio, Button } from 'antd';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import './GenelBilgiler.scss';
import GeneBilgilerInputs from './GeneBilgilerInputs';
import { useState } from 'react';
import * as Yup from 'yup';

const GenelBilgiler = () => {
    const [showRemainingForm, setShowRemainingForm] = useState(false);


    const validationSchema = Yup.object().shape({ 
        darpDurumu: Yup.string().required('Lütfen darp durumu seçiniz.'), 
    });

    const handleContinue = () => {
        setShowRemainingForm(true); 
    };

    return (
        <div className='generalFormContainer'>
            <h5 className='generalInfoTitle' >Genel Bilgiler</h5>
            <Formik
                initialValues={{
                    darpDurumu: '',
                }}
                validationSchema={validationSchema}
                onSubmit={() => {
                    setShowRemainingForm(true);
                }}
            >
                {({ handleSubmit, values  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Space direction="vertical">
                            <label htmlFor="darpDurumu">Darp Durumu</label>
                            <Space>
                                <Field name="darpDurumu" type="radio" value="Evet" as={Radio}>Evet</Field>
                                <Field name="darpDurumu" type="radio" value="Hayır" as={Radio}>Hayır</Field>
                            </Space>
                            <ErrorMessage name="darpDurumu" component="div" className="error-message" />

                            <Button type="primary" htmlType="submit" onClick={handleContinue} disabled={!values.darpDurumu}>
                                Devam
                            </Button>
                        </Space>
                    </Form>
                )}
            </Formik>
             {showRemainingForm && <GeneBilgilerInputs />}
        </div>
    );
};

export default GenelBilgiler;
