import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'


describe('Pruebas en hook useCounter', () => {
  
    test('Debe retornar valores por defecto', () => {
      
        const { result } = renderHook( () => useCounter() )
        //console.log(result.current)
        expect( result.current.counter ).toBe(10)
        expect( typeof result.current.increment ).toBe('function')
        expect( typeof result.current.decrement ).toBe('function')
        expect( typeof result.current.reset ).toBe('function')
    })
    
    test('Debe retornar counter 100', () => {
      
        const { result } = renderHook( () => useCounter(100) )
        expect( result.current.counter ).toBe(100)
        
    })
    
    test('Debe incrementar el counter en 1', () => {
      
        const { result } = renderHook( () => useCounter(100) )
        const { increment } = result.current
        act( () => { increment() })
        // console.log( result.current.counter )
        expect( result.current.counter ).toBe(101)
        
    })
    
    test('Debe disminuir counter en 1', () => {
      
        const { result } = renderHook( () => useCounter(100) )
        const { decrement } = result.current
        act( () => { decrement() })
        // console.log( 'Decrement: ', result.current.counter )
        expect( result.current.counter ).toBe(99)
        
    })
    
    test('Debe hacer el reset del counter', () => {
      
        const { result } = renderHook( () => useCounter(100) )
        const { increment, reset } = result.current
        act( () => { 
          increment()
          reset() 
        })
        // console.log( result.current.counter )
        expect( result.current.counter ).toBe(100)
        
    })
    
})