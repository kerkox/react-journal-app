import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "7k1visYf1RjQeSKHGqoA",
      title: "Hola",
      body: "Mundo",
    },
  },
};

let store = mockStore(initState);
describe("Pruebas con las acciones de Auth", () => {

  beforeEach(() => {
    store = mockStore(initState);
  })
  test("login y logout deben de crear la accion respectiva ", () => {
    const  uid = "12345"
    const displayName = "Paul";
    const loginAction = login(uid, displayName);
    const logoutAction = logout();
    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });
    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });


  test("debe de realizar startLogout ", async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type:types.logout
    })
    
    expect(actions[1]).toEqual({
      type:types.notesLogoutCleaning
    })

  });

  test('debe de inicar el startLoginEmailPassword', async () => {
    const userEmail = "test@testing.com";
    const password = "123456"
    await store.dispatch(startLoginEmailPassword(userEmail, password))
    const actions = store.getActions();
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "IvQVDcXuKNZbzTevgkNXPnwcmlW2",
        displayName: null
      },
    });
  })
  
});
