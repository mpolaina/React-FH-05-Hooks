import { shallow } from "enzyme"
import { HooksApp } from '../HooksApp'

describe('Pruebas en <HookApp/>', () => {
  
    test('Debe mostrarse correctamente', () => {
      
        const wrapper = shallow(<HooksApp/>)
        expect( wrapper ).toMatchSnapshot()
        
    })
    
})