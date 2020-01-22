
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes: any[] = [
    {
      city: 'Cartagena',
      img: 'assets/funcake/ciudades/cartagena.jpg',
      description : 'Cartagena de Indias, oficialmente Distrito Turístico y Cultural de Cartagena de Indias, es la capital del departamento de Bolívar, Colombia. Fue fundada el 1 de junio de 1533 por Pedro de Heredia. Cartagena ha desarrollado su zona urbana, conservando el centro histórico y convirtiéndose en uno de los puertos de mayor importancia en Colombia, el Caribe y el mundo así como célebre destino turístico. Actualmente la población total de su cabecera es de 971 700 habitantes, siendo el quinto (5) municipio más poblado del país.',
      reposterias : [
        {
          name: 'Monster Cakes Ana Del Rio',
          description: 'Monster Cakes es la empresa que hará del pastel de su matrimonio algo memorable, único y original. Con una amplia experiencia en el área de repostería y especialmente en tortas en fondant, logrando siempre sorprender a sus invitados. Ya que sus diseño siempre son creados de acuerdo con las necesidades y gustos de sus clientes. En su boda podrán contar con pasteles cargados de creatividad, ingenio y dulzura.',
          address: 'Dirección: Cra. 48 #30 - 129, Cartagena, Bolívar',
          logo: 'assets/funcake/reposterias/logoMonsterCake.jpg',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
        {
          name: 'Reposteria astor',
          description: 'En el 2010 la Repostería Astor celebra 80 años de acompañar a sus clientes en sus momentos más dulces y queridos. La Cámara de Comercio de Medellín para Antioquia no se ha hecho esperar para condecorar a la Repostería con el Pergamino Dorado, con motivo de este aniversario que enorgullece a la ciudad.',
          address: 'Dirección: Calle 94 #53 – 44 Barranquilla',
          logo: 'assets/funcake/reposterias/astor.png',
          stars : 4,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
        {
          name: 'Amaria reposteria',
          description: 'Un hermoso lugar con aire francés, donde sus postres seducen la vista para provocar al paladar. Nuevamente nos encontramos con una repostería que aboga por el bajo azúcar, pero en este caso todas sus recetas carecen de azúcar. Es una pastelería clásica francesa que cocina cakes de limón, de chocolate y amapola. Sus vitrinas están llenas de colores pasteles de sus muffins de manzana, canela, queso, milhojas de vainilla, de frambuesa, bombones de chocolate, trufas y macarones. Claramente no puede faltar el pan en una pastelería francesa. Definitivamente unas de las mejores pastelerías de Bogotá.',
          address: 'Dirección: Cl. 109 #17 - 10, Bogotá',
          logo: 'assets/funcake/reposterias/amaria.jpg',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
      ]
    },
    {
      city: 'Barranquilla',
      img: 'assets/funcake/ciudades/barranquilla.jpg',
      description : 'Barranquilla, oficialmente Distrito Especial, Industrial y Portuario de Barranquilla, es la capital del departamento del Atlántico. Está ubicada sobre la margen occidental del río Magdalena a 7,5 km de su desembocadura en el mar Caribe. Es el principal centro económico de la Región Caribe de Colombia, entre las actividades económicas destacan el comercio y la industria. La población de Barranquilla es de 1 223 967 personas, lo que la convierte en la cuarta ciudad más poblada del país detrás deBogotá, Medellín y Cali. La ciudad es el núcleo del Área Metropolitana de Barranquilla, la cual está constituida además por los municipios de Soledad, Malambo, Galapa y Puerto Colombia.',
      reposterias : [
        {
          name: 'Monster Cakes Ana Del Rio',
          description: 'Monster Cakes es la empresa que hará del pastel de su matrimonio algo memorable, único y original. Con una amplia experiencia en el área de repostería y especialmente en tortas en fondant, logrando siempre sorprender a sus invitados. Ya que sus diseño siempre son creados de acuerdo con las necesidades y gustos de sus clientes. En su boda podrán contar con pasteles cargados de creatividad, ingenio y dulzura.',
          address: 'Dirección: Cra. 48 #30 - 129, Cartagena, Bolívar',
          logo: 'assets/funcake/reposterias/logoMonsterCake.jpg',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
        {
          name: 'Reposteria astor',
          description: 'En el 2010 la Repostería Astor celebra 80 años de acompañar a sus clientes en sus momentos más dulces y queridos. La Cámara de Comercio de Medellín para Antioquia no se ha hecho esperar para condecorar a la Repostería con el Pergamino Dorado, con motivo de este aniversario que enorgullece a la ciudad.',
          address: 'Dirección: Calle 94 #53 – 44 Barranquilla',
          logo: 'assets/funcake/reposterias/astor.png',
          stars : 4,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
        {
          name: 'Amaria reposteria',
          description: 'Un hermoso lugar con aire francés, donde sus postres seducen la vista para provocar al paladar. Nuevamente nos encontramos con una repostería que aboga por el bajo azúcar, pero en este caso todas sus recetas carecen de azúcar. Es una pastelería clásica francesa que cocina cakes de limón, de chocolate y amapola. Sus vitrinas están llenas de colores pasteles de sus muffins de manzana, canela, queso, milhojas de vainilla, de frambuesa, bombones de chocolate, trufas y macarones. Claramente no puede faltar el pan en una pastelería francesa. Definitivamente unas de las mejores pastelerías de Bogotá.',
          address: 'Dirección: Cl. 109 #17 - 10, Bogotá',
          logo: 'assets/funcake/reposterias/amaria.jpg',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
      ]
    },
    {
      city: 'Medellin',
      img: 'assets/funcake/ciudades/medellin.jpg',
      description : 'Medellín es la segunda ciudad en importancia en Colombia, y capital del Departamento de Antioquia; su temperatura promedio es de 24º y está ubicada a 1.475 metros sobre el nivel del mar; cuenta con una extensión de 105 kilómetros cuadrados de suelo urbano, 270 de suelo rural y 5,2 de suelo para expansión.',
      reposterias : [
        {
          name: 'Monster Cakes Ana Del Rio',
          description: 'Monster Cakes es la empresa que hará del pastel de su matrimonio algo memorable, único y original. Con una amplia experiencia en el área de repostería y especialmente en tortas en fondant, logrando siempre sorprender a sus invitados. Ya que sus diseño siempre son creados de acuerdo con las necesidades y gustos de sus clientes. En su boda podrán contar con pasteles cargados de creatividad, ingenio y dulzura.',
          address: 'Dirección: Cra. 48 #30 - 129, Cartagena, Bolívar',
          logo: 'assets/funcake/reposterias/logoMonsterCake.jpg',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
        {
          name: 'Reposteria astor',
          description: 'En el 2010 la Repostería Astor celebra 80 años de acompañar a sus clientes en sus momentos más dulces y queridos. La Cámara de Comercio de Medellín para Antioquia no se ha hecho esperar para condecorar a la Repostería con el Pergamino Dorado, con motivo de este aniversario que enorgullece a la ciudad.',
          address: 'Dirección: Calle 94 #53 – 44 Barranquilla',
          logo: 'assets/funcake/reposterias/astor.png',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
        {
          name: 'Amaria reposteria',
          description: 'Un hermoso lugar con aire francés, donde sus postres seducen la vista para provocar al paladar. Nuevamente nos encontramos con una repostería que aboga por el bajo azúcar, pero en este caso todas sus recetas carecen de azúcar. Es una pastelería clásica francesa que cocina cakes de limón, de chocolate y amapola. Sus vitrinas están llenas de colores pasteles de sus muffins de manzana, canela, queso, milhojas de vainilla, de frambuesa, bombones de chocolate, trufas y macarones. Claramente no puede faltar el pan en una pastelería francesa. Definitivamente unas de las mejores pastelerías de Bogotá.',
          address: 'Dirección: Cl. 109 #17 - 10, Bogotá',
          logo: 'assets/funcake/reposterias/amaria.jpg',
          stars : 5,
          productos: [
            {
              nombre: 'Tortas para bautizo',
              id: 'bautizo',
              // tslint:disable-next-line:max-line-length
              bio: 'Los bautismos son practicados por muchas religiones, incluyendo a los cristianos y católicos. La ceremonia del bautismo es a menudo seguida de una fiesta o recepción en honor de la persona que fue bautizada. El pastel casi siempre se sirve en la recepción. Hornea y decora una torta de bautismo hermosa que traerá una sonrisa a la cara de la persona recién bautizada y su familia.',
              img: 'assets/funcake/bautizo/bautizo1.jpg',
            },
            {
              nombre: 'Tortas de Matrimonio',
              id: 'matrimonio',
              // tslint:disable-next-line:max-line-length
              bio: 'Por lo general, la tradición manda que el novio y la novia corten juntos el primer trozo de tarta, a menudo con un gran cuchillo o incluso una espada. Una antigua tradición establecía que la novia debía servir la tarta a la familia del novio, como símbolo de su dedicación a la nueva familia. La tradición también puede establecer que la novia y el novio se den el uno al otro los primeros mordiscos de tarta. Una vez más, este acto simboliza la sustitución de la hasta entonces unión padre-hijo en favor de la unidad familiar que acaba de crearse.',
              img: 'assets/funcake/Matrimonio/Matrimonio1.jpg',
            },
            {
              nombre: 'Tortas para 15 años',
              id: 'quince',
              // tslint:disable-next-line:max-line-length
              bio: 'La celebración marca la transición de niña a mujer de la quinceañera. Sirve como un modo de reconocer que la chica en cuestión ha alcanzado la madurez. La celebración sin embargo varía mucho según los distintos países. Sin embargo, el cumplir quince años no significa que la chica en cuestión sea ya mayor de edad porque esto puede variar según las leyes de cada país.',
              img: 'assets/funcake/15/quince1.jpg',
            },
            {
              nombre: 'Tortas para baby shower',
              id: 'babyShower',
              // tslint:disable-next-line:max-line-length
              bio: ' Se denomina baby shower a una celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé. En el marco de la fiesta, los padres del niño reciben regalos, por lo general destinados a su hijo',
              img: 'assets/funcake/babyShower/shower1.jpg',
            },
          ]
        },
      ]
    },
  ];


  private tortas: any[] = [
    {
      nombre: 'Arma la tuya',
      // tslint:disable-next-line:max-line-length
      bio: 'Elige sabor, cubierta, tamaño, numero de pisos y decoracion. crea la torta a tu medida',
      img: 'assets/funcake/qrimg/img3.jpg',
      qr: 'assets/funcake/qr/qr3.jpg',
      precio: 'A cotizar',
      categoria: 'bautizo'
    },
    {
      nombre: 'Torta 3 pisos fondant azul',
      // tslint:disable-next-line:max-line-length
      bio: 'Torta de 2 pisos decorado  con fondant blanco y azul,  efecto acolchado o tapizado capitoné blanco, con perlas blancas, rosa blanca en la parte superior',
      img: 'assets/funcake/qrimg/img3.jpg',
      qr: 'assets/funcake/qr/qr3.jpg',
      precio: '$480,000',
      categoria: 'bautizo'
    },
    {
      nombre: 'Tortas para bautizo',
      categoria: 'bautizo',
      precio: '$280,000',
      // tslint:disable-next-line:max-line-length
      bio: 'Torta de 2 pisos decorado  con fondant blanco y rosado,  efecto acolchado o tapizado capitoné blanco, con perlas doradas, rosa blanca lazo de moño rosado y cruz con perlas en fondant',
      img: 'assets/funcake/bautizo/bautizo1.jpg',
    },
    {
      nombre: 'Tortas de Matrimonio',
      categoria: 'matrimonio',
      precio: '$40,000',
      // tslint:disable-next-line:max-line-length
      bio: 'torta de 3 pisos con fondant blanco, los tres pidos contiene fondant blanco con perlas blancas hechas con fondant y rosas o flores  reales con sus hojas verdes',
      img: 'assets/funcake/qrimg/img2.jpg',
      qr: 'assets/funcake/qr/qr2.jpg',
    },
    {
      nombre: 'Tortas para 15 años',
      categoria: 'quince',
      precio: '$270,000',
      // tslint:disable-next-line:max-line-length
      bio: 'torta dde 4 pisos con base de icopor con lazos dorados, cada piso contiene fondant blanco con su base de icopor y un lazo de color dorado, y alrededor de la torta con fondant tiene perlas doradas comestibles',
      img: 'assets/funcake/15/quince1.jpg',
    },
    {
      nombre: 'Torta 1 piso caramelo blanco',
      // tslint:disable-next-line:max-line-length
      bio: ' Torta de 1 piso decorado con caramelo y velas,   efecto acolchado  y 5 decoraciones',
      img: 'assets/funcake/qrimg/img1.jpg',
      qr: 'assets/funcake/qr/qr1.jpg',
      precio: '$150,000',
      categoria: 'bautizo'
    },
    {
      nombre: 'Tortas 2 pisos fondant azult',
      // tslint:disable-next-line:max-line-length
      bio: 'Torta de 2 pisos decorado con fondant blanco y azul, efecto acolchado o tapizado capitoné blanco, muñecos hechos en fondant personalizables, con lazo azul y el nombre de la personas hechos en cubos de fondant azul con blanco',
      img: 'assets/funcake/bautizo/bautizo3.jpg',
      precio: '$200,000',
      categoria: 'bautizo'
    },
    {
      nombre: 'Torta 3 pisos y rosas',
      // tslint:disable-next-line:max-line-length
      bio: ' torta de 3 pisos , donde el primer piso tiene un efecto de rosas hechos con crema de color rosado, el segundo piso esta hecho con efecto acolchado o tapizado capitoné blanco, el tercer piso está hecho con fondant y letras personalizables con fondant y la cruz hecho con fomi y perlas plateadas',
      img: 'assets/funcake/qrimg/img4.jpg',
      qr: 'assets/funcake/qr/qr4.jpg,',
      precio: '$400,000',
      categoria: 'bautizo'
    },
    {
      nombre: 'Torta 2 pisos fondant blanco',
      // tslint:disable-next-line:max-line-length
      bio: 'torta de 2 pisos hecho con fondant de color blanco, gris y blanco, el primer piso con tiene fondant azul  con tiras de color gris y blanco, segundo piso tiene fondant blanco con letras personalizables azules y un muñeco con diseño angelical hecho en fondant',
      img: 'assets/funcake/qrimg/img5.jpg',
      qr: 'assets/funcake/qr/qr5.jpg',
      precio: '$200,000',
      categoria: 'bautizo'
    },
  ];
  constructor() {
    console.log('Servicio listo para usar!!!');
  }


  getHeroes(city: string): Heroe[] {
    const heroes = this.heroes;
    const x = [];
    for (const reposteria of heroes) {
      if(reposteria.city === city){
        x.push(reposteria);
      }
    };
    return x;
  }
  getTortas() {
    const tortas = this.tortas;
    return tortas;
  }
  getTortasCategoria(categoria: string) {
    const tortas = this.tortas;
    const x = [];

    for(const torta of tortas) {
      
      if(torta.categoria === categoria)
        x.push(torta);
    };
    
    return x;
  }
  getHeroe(position: number) {
    return this.heroes[position].reposterias[position];
  }
  buscarHeroes(termino: string): Heroe[] {

    const heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {

      const heroe = this.heroes[i];

      const nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }

    }

    return heroesArr;

  }


}


export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
};

export interface Tortas {
  nombre: string;
  categoria: string;
  bio: string;
  img: string;
  precio: string;
};
