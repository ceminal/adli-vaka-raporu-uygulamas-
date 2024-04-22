
export const saveState = (formValues: any) => {
    localStorage.setItem('formValues', JSON.stringify(formValues));
};

export const loadState = () => {
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
        return JSON.parse(storedFormValues);
    }
    return null; 
};
