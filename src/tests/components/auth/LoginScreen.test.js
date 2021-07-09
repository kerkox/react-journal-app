import { mount } from "enzyme"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { LoginScreen } from "../../../components/auth/LoginScreen"


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading:false,
    msgError:null
  }
};

let store = mockStore(initState);
describe('Pruebas en <LoginScreen />', () => {

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  ); 
  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  
})
