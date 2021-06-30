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
});
