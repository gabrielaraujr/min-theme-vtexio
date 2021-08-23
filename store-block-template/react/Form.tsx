import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['formContainer', 'text', 'input', 'button'] as const

const Form: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <form
      style={{ bottom: '100px', height: '400px' }}
      className={`${handles.formContainer} w-60 relative center flex flex-column items-center justify-center`}
    >
      <h2 className={`${handles.input} white`}>Item indisponível?</h2>
      <p className={`${handles.input} white`}>Cadastre-se e fique por dentro!</p>

      <input type="text" placeholder="Nome" className={`${handles.input} w-100 white mb4`} />

      <input type="text" placeholder="Email" className={`${handles.input} w-100 white mb4`} />

      <input type="text" placeholder="Telefone" className={`${handles.input} w-100 white mb4`} />

      <button type="submit" className={`${handles.button} w-100`}>
        Confirmar
      </button>
    </form>
  )
}

/* Form.schema = {
   title: 'editor.countdown-title.title',
   description: 'editor.countdown-title.description',
   type: 'object',
   properties: {
     title: {
       title: 'editor.countdown.title.title',
       type: 'string',
       default: null,
     },
   },
 } */

export default Form
