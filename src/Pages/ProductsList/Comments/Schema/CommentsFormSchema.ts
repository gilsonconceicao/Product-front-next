import * as yup from 'yup'; 

export const validationSchemaCommentsForm = yup.object().shape({
  comment: yup.string().typeError('Campo precisa ser preenchido').required('Campo precisa ser preenchido')
}); 

export const defaultValuesCommentsForm = {
  comment: null
}