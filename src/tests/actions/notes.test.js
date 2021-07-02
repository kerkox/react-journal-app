import configureStore from "redux-mock-store"; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from "../../actions/notes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth:{
    uid:'TESTING',
  }
});
describe("pruebas con las acciones de notes", () => {
  test("debe de crear una nueva nota startNewNote", async () => {
    await store.dispatch( startNewNote() )
  });
});
