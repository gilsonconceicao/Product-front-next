import * as yup from 'yup'; 
export const validationSchemaProductForm = yup.object().shape({
  name: yup.string().typeError('Campo precisa ser preenchido').required('Campo precisa ser preenchido'), 
  description: yup.string().typeError('Descrição precisa ser preenchido').required('Descrição precisa ser preenchido'), 
  price: yup.number().typeError('Preço precisa ser preenchido').required('Preço precisa ser preenchido'), 
  discount: yup.number().typeError('Desconto precisa ser preenchido').required('Desconto precisa ser preenchido'), 
  address: yup.object().shape({
    zipCode: yup.string().typeError('CEP precisa ser preenchido').required('CEP precisa ser preenchido'), 
    street: yup.string().typeError('Rua precisa ser preenchido').required('Rua precisa ser preenchido'),
    city: yup.string().typeError('Cidade precisa ser preenchido').required('Cidade precisa ser preenchido'),
    state: yup.string().typeError('Estado precisa ser preenchido').required('Estado precisa ser preenchido'),
  })
}); 

export const defaultValuesProductForm = {
  name: null, 
  description: null, 
  price: 0, 
  discount: 0,
  address: null
}