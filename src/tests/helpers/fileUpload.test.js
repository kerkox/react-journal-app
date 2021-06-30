import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "react-journal-app-paul",
  api_key: "134751489735462",
  api_secret: "bSoLq_pXPt0glTNMfitNWmtZaqA",
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de cargar un archivo y retornar el URL', async () => {
    const resp = await fetch(
      "https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png"
    );
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string')

    // Borrar imagen por ID
    const segments =  url.split('/');
    const imageId = segments.pop().replace('.png','');

    await cloudinary.v2.api.delete_resources(imageId, {}, () => {})
    
  })

  test('debe de retornar un error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null)
  })
  
  
})
