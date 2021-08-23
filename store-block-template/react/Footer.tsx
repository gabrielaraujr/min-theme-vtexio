import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { User, Award, ShoppingCart, HelpCircle } from 'react-feather'

const CSS_HANDLES = ['footerContainer', 'btn'] as const

const Footer: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div
      className={`${handles.footerContainer} w-100 bg-muted-1 flex items-center justify-center fixed h3 bottom-0`}
    >
      <button
        className={`${handles.btn} hover-c-on-action-secondary w4 flex flex-column items-center pointer bg-transparent pv2 ph3 b--none outline-0 no-underline white`}
      >
        <span>
          <User />
        </span>
        <span>PERFIL</span>
      </button>

      <button
        className={`${handles.btn} hover-c-on-action-secondary w4 flex flex-column items-center pointer bg-transparent pv2 ph3 b--none outline-0 no-underline white`}
      >
        <span>
          <Award />
        </span>
        <span>DESAFIOS</span>
      </button>

      <button
        className={`${handles.btn} hover-c-on-action-secondary w4 flex flex-column items-center pointer bg-transparent pv2 ph3 b--none outline-0 no-underline white`}
      >
        <span>
          <ShoppingCart />
        </span>
        <span>LOJA</span>
      </button>

      <a
        className={`${handles.btn} hover-c-on-action-secondary w4 flex flex-column items-center pointer bg-transparent pv2 ph3 b--none outline-0 no-underline white`}
        href="https://api.whatsapp.com/send?l=pt-BR&phone=5511964335064&text=Para%20falar%20com%20a%20Gabi%F0%9F%91%B1%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%0A%0AClique%20enviar%F0%9F%91%89%0A%0A------------%0A*D%C3%BAvida%20sobre%3A*%20Signos%20-%20Sagit%C3%A1rio%0A*ID%3A*%2071458"
        target="_blank"
      >
        <span>
          <HelpCircle />
        </span>
        <span>SUPORTE</span>
      </a>
    </div>
  )
}

// Footer.schema = {
//   title: 'editor.countdown-title.title',
//   description: 'editor.countdown-title.description',
//   type: 'object',
//   properties: {
//     title: {
//       title: 'editor.countdown.title.title',
//       type: 'string',
//       default: null,
//     },
//   },
// }

export default Footer
