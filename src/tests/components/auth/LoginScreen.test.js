import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";
import { LoginScreen } from "../../../components/auth/LoginScreen";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en <LoginScreen />", () => {

  beforeEach(() => {
    store = mockStore(initState);
    store.dispatch = jest.fn();
    jest.clearAllMocks();
  })
  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la accion de startGoogleLogin", () => {
    wrapper.find(".google-btn").prop("onClick")();
    expect( startGoogleLogin ).toHaveBeenCalled();
  });

  test('debe de disparar startLogin con los respectivos argumentos', () => {
    const email = "paul@paul.com";
    const password = "123456";
    wrapper.find('form').prop('onSubmit')({preventDefault(){}});
    // expect(store.dispatch).toHaveBeenCalled()
    expect(startLoginEmailPassword).toHaveBeenCalledWith(email, password)
    
  })
  


});
