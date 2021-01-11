import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from "../../hooks/useFetch"

describe('Pruebas en useFetch', () => {
  
    test('Debe retornar información por defecto', () => {
      
        const url = 'https://www.breakingbadapi.com/api/quotes/1'
        const { result } = renderHook ( () => useFetch(url))
        const { data, loading, error } = result.current
        expect( data ).toBe( null )
        expect( loading ).toBe( true )
        expect( error ).toBe( null )
    })
    
    test('Debe retornar la petición fetch', async () => {
      
      const url = 'https://www.breakingbadapi.com/api/quotes/1'
      const { result, waitForNextUpdate } = renderHook ( () => useFetch(url))
      
      await waitForNextUpdate()
      const { data, loading, error } = result.current
      
      expect( data.length ).toBe(1)
      expect( loading ).toBe( false )
      expect( error ).toBe( null )
      
    })
    
    test('Debe manejar el error', async () => {
      
      const url = 'https://reqres.in/apid/users?page=2'
      const { result, waitForNextUpdate } = renderHook ( () => useFetch(url))
      
      await waitForNextUpdate()
      const { data, loading, error } = result.current
      
      expect( data ).toBe(null)
      expect( loading ).toBe( false )
      expect( error ).toBe( 'No se pudo cargar información' )
      
    })
    
    
})