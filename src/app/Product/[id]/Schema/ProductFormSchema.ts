import * as yup from 'yup'; 
export const validationSchemaProductForm = yup.object().shape({
  name: yup.string().typeError('Campo precisa ser preenchido').required('Campo precisa ser preenchido')
}); 

export const defaultValuesProductForm = {
  name: "Teste"
}