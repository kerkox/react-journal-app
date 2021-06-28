import { types } from "../../types/types";

 describe('Pruebas de Types', () => {
  test('debe de ser el mismo objeto', () => {
    const typesExpected = {
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] set error",
      uiRemoveError: "[UI] remove error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      notesAddNew: "[Notes] New note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Update note",
      notesFileUrl: "[Notes] Update image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    };
    expect(types).toEqual(typesExpected);
  })
  
 })
 