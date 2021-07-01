import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en ui-actions', () => {
  test('todas las acciones deben de funcionar ', () => {
    const msg = "HELP!!!!";
    const action = setError(msg);

    expect(action).toEqual({
      type:types.uiSetError,
      payload:msg
    })
    const removeErrorAction = removeError();
    const uiStartLoadingAction = uiStartLoading();
    const uiFinishLoadingAction = uiFinishLoading();

    expect(removeErrorAction).toEqual({
      type:types.uiRemoveError
    });
    expect(uiStartLoadingAction).toEqual({
      type:types.uiStartLoading
    });
    expect(uiFinishLoadingAction).toEqual({
      type:types.uiFinishLoading
    });

  })
  
})
