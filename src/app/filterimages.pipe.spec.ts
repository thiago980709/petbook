import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  const pipe = new FilterimagesPipe();

  describe('ngOnInit', () => {
    it('create an instance', () => {
      expect(pipe).toBeTruthy();
    });
  });
  
  describe('Filtro perro', () => {
    it('Cuando se filtra por perro se deben eliminar los elementos de la lista que tenga el atributo brand=gato', () => {
      expect(pipe.transform([{ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }], 
      'perro')).toEqual([{ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }]);
    });
  });

  describe('Filtro gato', () => {
    it('Cuando se filtra por gato se deben eliminar los elementos de la lista que tenga el atributo brand=perro', () => {
      expect(pipe.transform([{ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }], 
      'gato')).toEqual([{ "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" }]);
    });
  });

  describe('Filtro all', () => {
    it('Cuando se filtra por all se debe devolver la lista completa', () => {
      expect(pipe.transform([{ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }], 
      'all')).toEqual([{ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }]);
    });
  });
  
});
