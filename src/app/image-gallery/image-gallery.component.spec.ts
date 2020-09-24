import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';



describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let imgService: ImageService = new ImageService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent,FilterimagesPipe ],
      providers:[
        {provide:ImageService,useValue:imgService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('debe crear el componente', () => {
      expect(component).toBeTruthy();
    });
  })
  
  describe('Validacion Lista Mascotas',()=>{
    it('Cuando se obtenga la lista cada elemento debe tener su respectiva imagen', () => {
      let uris = ['assets/images/perro1.jpg','assets/images/perro2.jpg','assets/images/gato1.jpg','assets/images/gato2.jpeg','assets/images/perro3.jpg'];
      let resp = imgService.getImages();
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        expect(element.url).toBe(uris[index]);
      }
    });

    it('Cuando se obtenga la lista ningun elemento puede tener un atributo null', () => {
      let resp = imgService.getImages();
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        expect(element.id).not.toBeNull();
        expect(element.brand).not.toBeNull();
        expect(element.url).not.toBeNull();
      }
    });

    it('Cuando se cargue el componente debe cargar la lista completa de mascotas', () => {
      let resp = imgService.getImages();
      expect(resp.length).toBe(5);
    });
  
    it('Cuando se obtenga la lista se verifica que ningun animal sea diferente de perro o gato', () => {
      let isNotCatOrDog = true;
      let resp = imgService.getImages();
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        if(element.brand == 'gato' || element.brand == 'perro'){
          isNotCatOrDog = false;
        }else{
          isNotCatOrDog = true;
        }
        expect(isNotCatOrDog).toBeFalse();
      }  
    });
  });

  describe('fixture', () => {
    it('Cuando se carga la vista, debe existir un elemento contenedor de imagenes con la clase img', () => {
      expect(fixture.nativeElement.querySelector('.img')).toBeDefined();
    });

    it('Cuando se carga la vista, debe existir 1 boton para los filtros con el nombre All', () => {
      expect(fixture.nativeElement.querySelector('#btnAll').textContent.trim()).toBe("All");
    });

    it('Cuando se carga la vista, debe existir 1 boton para los filtros con el nombre Perro', () => {
      expect(fixture.nativeElement.querySelector('#btnPerro').textContent.trim()).toBe("Perro");
    });

    it('Cuando se carga la vista, debe existir 1 boton para los filtros con el nombre Gato', () => {
      expect(fixture.nativeElement.querySelector('#btnGato').textContent.trim()).toBe("Gato");
    });
  });

});