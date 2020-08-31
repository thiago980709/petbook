import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  describe('getImages', () => {
    it('Cuando se llame el metodo, entonces debe retornar todas (5) las imagenes', () => {
      //Arrange (preparar la prueba)
      //este es el before
      //Act
      let resp = service.getImages();
      //Assert
      expect(resp.length).toBe(5);
    });
  });

  describe('getImage', () => {
    it('Cuando se envie 3 (esta dentro de la lista) entonces debe retornar este elemento', () => {
      const id = 3;
      let resp = service.getImage(id);
      expect(resp.brand).toBe('gato');
      expect(resp.url).toBe('assets/images/gato1.jpg');
    });
    it('Cuando se envie 7 (no esta dentro de la lista) entonces debe retornar indefinido', () => {
      const id = 7;
      let resp = service.getImage(id);
      expect(resp).toBeUndefined();
    });
  });

});
