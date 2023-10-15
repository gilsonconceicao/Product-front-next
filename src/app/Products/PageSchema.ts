import * as yup from 'yup'; 
export const validationSchemaPage = yup.object().shape({
  name: yup.string().typeError('Campo precisa ser preenchido').required('Campo precisa ser preenchido')
}); 

export const defaultValuesPage = {
  name: "Teste"
}