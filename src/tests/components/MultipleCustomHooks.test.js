import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../hooks/useCounter"
import { useFetch } from "../../hooks/useFetch"

// llamado a useFetch y useCounter
jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')


describe('Pruebas en MultipleCustomHooks', () => {
  
    beforeEach( () => {
      
      useCounter.mockReturnValue({
        counter: 1,
        increment: () => {}
      })
    })
    
  
    test('Debe mostrarse correctamente', () => {
      
        useFetch.mockReturnValue({
          // retorno por defecto del useFetch
          data: null, loading: true, error: null
        })
      
        const wrapper = shallow(<MultipleCustomHooks/>)
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe de mostrar la información', () => {
      
        useFetch.mockReturnValue({
          data: [{
            author: 'Manuel',
            quote: 'Hola que tal'
          }
          ],
          loading: false, 
          error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>)
        expect( wrapper.find('.alert').exists() ).toBe( false )
        expect( wrapper.find('.mb-4').text().trim() ).toBe('Hola que tal')
        expect( wrapper.find('footer').text().trim() ).toBe('Manuel')
        
        // console.log(wrapper.html())
        
    })
    
    
})