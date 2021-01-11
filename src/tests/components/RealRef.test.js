import { shallow } from "enzyme"
import { RealRef } from "../../components/04-useRef/RealRef"

describe('Pruebas en RealRef', () => {
  
    const wrapper = shallow(<RealRef/>)
    
    test('Debe mostrarse correctamente', () => {
    
      expect( wrapper ).toMatchSnapshot()
      expect( wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    })
    
    test('Debe mostrar el componente MultipleCustomHook', () => {
      
      wrapper.find('button').simulate('click')
      expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })
    
    
})