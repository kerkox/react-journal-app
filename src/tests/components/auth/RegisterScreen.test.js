import { mount } from "enzyme";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { startRegisterWithEmailPasswordName } from "../../../actions/auth";
import { types } from "../../../types/types";

jest.mock("../../../actions/auth", () => ({
  startRegisterWithEmailPasswordName:jest.fn(),
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
// store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);
describe("Pruebas en <RegisterScreen />", () => {

  // beforeEach(() => {
  //   store = mockStore(initState);
  //   // store.dispatch = jest.fn();
  // })
  test("debe de montarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de hacer el dispatch de la accion respectiva', () => {
    const emailField = wrapper.find('input[name="email"]');
    emailField.simulate('change', {
      target: {
        value:'',
        name:'email'
      }
    })

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    })
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: "Email is not valid",
    });
  })
  

  

  // test("debe de disparar startLogin con los respectivos argumentos", () => {
  //   const email = "paul@paul.com";
  //   const password = "123456";
  //   const name =  "" // "Paul"
  //   wrapper.find("form").prop("onSubmit")({ preventDefault() {} });
  //   // expect(store.dispatch).toHaveBeenCalled()
  //   expect(startRegisterWithEmailPasswordName).toHaveBeenCalledWith(email, password, name);
  // });
});
