import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas en el hook useForm', () => {
  
  const initialForm = {
    name: 'Manuel',
    email: 'm.polaina@gmail.com'
  }
  
    test('Debe retornar valores por defecto', () => {
      
        const { result } = renderHook( ()=> useForm(initialForm) )
        const [ values, handleInputChange, reset ]  = result.current
        // console.log( values )
        expect( values ).toEqual( initialForm )
        expect( typeof handleInputChange ).toBe('function')
        expect( typeof reset ).toBe('function')
      
    })
    
    test('Debe cambiar el name del formulario', () => {
       
        const { result } = renderHook( ()=> useForm(initialForm) )
        // Para desestructurar un array hay que poner el "espacio , " indicando que no interesa el primer elemento.
        const [ , handleInputChange ]  = result.current
        act( () => { 
          handleInputChange({
            target: {
              name: 'name',
              value: 'Fabio'
            }
          }) 
        })
        const [ values ] = result.current
        expect( values ).toEqual({ ...initialForm, name: 'Fabio' })
    })
    
    test('Debe de reestablecer el formulario con reset', () => {
        
          const { result } = renderHook( ()=> useForm(initialForm) )
          const [ , handleInputChange, reset ]  = result.current
          act( () => { 
            handleInputChange({
              target: {
                name: 'name',
                value: 'Fabio'
              }
            })
            reset() 
          })
          const [ values ] = result.current
          expect( values ).toEqual( initialForm )
    })
    
    
    
  
})