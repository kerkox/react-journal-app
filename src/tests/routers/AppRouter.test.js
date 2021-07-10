import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { firebase } from "../../firebase/firebase-config";
import { types } from "../../types/types";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { act } from "@testing-library/react";

act;

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "1235",
      title: "Otra cosa",
      body: "body",
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <AppRouter />", () => {
  test("debe de llamar al login si estoy autenticado", async () => {
    let user;

    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword("test@testing.com", "123456");
      user = userCred.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
      
    });

    expect(login).toHaveBeenCalledWith("IvQVDcXuKNZbzTevgkNXPnwcmlW2", null);
  });
});
