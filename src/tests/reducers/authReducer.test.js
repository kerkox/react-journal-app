import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de realizar el login ", () => {
    const initState = {};
    const payload = {
      uid: 12345,
      displayName: "Paul",
    };
    const action = {
      type: types.login,
      payload,
    };
    const state = authReducer(initState,action);
    const {uid, displayName:name} = payload;
    expect(state).toEqual({uid, name});
  });

  test("debe de realizar el logout ", () => {
    const initState = {
      uid: 12345,
      displayName: "Paul",
    };
    const action = {
      type: types.logout
    };
    const state = authReducer(initState,action);
    expect(state).toEqual({});
  });

  test("debe de retornar el estado con una action desconocida ", () => {
    const initState = {
      uid: 12345,
      displayName: "Paul",
    };
    const action = {
      type: 'asdasdasdasd'
    };
    const state = authReducer(initState,action);
    expect(state).toEqual(initState);
  });


});
