const { v4: uuidv4 } = require("uuid");

async function createData() {
  const roles = [
    { rol_id: 1, rol_descripcion: "root" },
    { rol_id: 2, rol_descripcion: "artista" },
  ];

  const categoria = [
    { cat_id: 1, cat_descripcion: "fotografia" },
    { cat_id: 2, cat_descripcion: "pintura" },
    { cat_id: 3, cat_descripcion: "escultura" },
    { cat_id: 4, cat_descripcion: "arte digital" },
  ];

  const usuario = [
    {
      usuario_id: uuidv4(),
      usuario_name: "Luis Gomez",
      usuario_email: "LuisGomez@mail.com",
      usuario_imagen:
        "https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/02/Dragon-Ball-Todas-las-transformaciones-oficiales-de-Goku-10.png?resize=640%2C720&quality=80&ssl=1",
      usuario_password: "1234",
      rol_id: 2,
    },
    {
      usuario_id: uuidv4(),
      usuario_name: "Pedro Aranda",
      usuario_email: "martin@mail.com",
      usuario_imagen:
        "https://img.freepik.com/vector-gratis/perfil-hombre-dibujos-animados_18591-58483.jpg?size=338&ext=jpg",
      usuario_password: "1234",
      rol_id: 2,
    },
    {
      usuario_id: uuidv4(),
      usuario_name: "Facundo Maksud",
      usuario_email: "facundomaksud@gmail.com",
      usuario_imagen:
        "https://lh3.googleusercontent.com/a-/AOh14GhddTDQObPXZC0HQ-r7OSEtjuEr7Eo_bmXPOgG1yA=s96-c",
      usuario_password: "1234",
      rol_id: 2,
    },
    {
        usuario_id: uuidv4(),
        usuario_name: "Luciana Rodriguez",
        usuario_email: "luciana@mail.com",
        usuario_imagen:
          "https://img.freepik.com/vector-gratis/dibujos-animados-perfil-mujer_18591-58480.jpg?size=338&ext=jpg",
        usuario_password: "1234",
        rol_id: 2,
      },
      {
        usuario_id: uuidv4(),
        usuario_name: "Raul Garcia",
        usuario_email: "raulgarcia@mail.com",
        usuario_imagen:
          "https://cdn.pixabay.com/photo/2020/05/27/02/00/man-5225390_960_720.png",
        usuario_password: "1234",
        rol_id: 2,
      },
      {
        usuario_id: uuidv4(),
        usuario_name: "Martin Perez",
        usuario_email: "martin@mail.com",
        usuario_imagen:
          "https://media.lv12.com.ar/p/d7cf762097ce556a45e6871bbbec9c30/adjuntos/261/imagenes/001/522/0001522189/1200x900/smart/leonardo-ponzio-emblema-river-platejpeg.jpeg",
        usuario_password: "1234",
        rol_id: 2,
      },
  ];

  const obraArte = [
    {
      oa_id: uuidv4(),
      oa_name: "Pintura 1",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2015/05/12/223736.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 2",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 3",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 4",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 5",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 6",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Foto prueba",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "imagen 99 ",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Fotografia cerros",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Ejemplo",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 100",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "example",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://i0.wp.com/wokii.com/wp-content/uploads/2020/12/new-project-6-3.jpg?fit=1081%2C700&ssl=1",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "amanecer",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "mosaicos",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[2].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Paisajes",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[1].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "paisajes2",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[3].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "zazazaza",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://elordenmundial.com/wp-content/uploads/2017/05/Monte-Fuji-1024x660.jpg",
      usuario_id: usuario[1].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "lalalala",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "http://augustomoreno.com/wp-content/uploads/2014/01/escultura-contemporanea-augusto-moreno-cascamorras.jpg",
      usuario_id: usuario[1].usuario_id,
      cat_id: categoria[2].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Pintura 1",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "foto edificios",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[0].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "Mona Lisa",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      usuario_id: usuario[1].usuario_id,
      cat_id: categoria[0].cat_id,
    },

    {
      oa_id: uuidv4(),
      oa_name: "practicas",
      oa_resenia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula",
      oa_descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tortor magna, quis malesuada enim viverra ac. Nam vel felis gravida, convallis massa a, dictum odio. Ut vehicula, lacus eget tempor commodo, massa elit lacinia lacus, sed rutrum erat augue nec sapien.",
      oa_fechaCreacion: "01-05-1998",
      oa_oculto: false,
      oa_likes: 0,
      oa_imagen_obra:
        "https://cdn2.chicmagazine.com.mx/uploads/media/2020/07/29/gogh-pinturas-obras-famosas-foto.jpg",
      usuario_id: usuario[0].usuario_id,
      cat_id: categoria[1].cat_id,
    },
  ];

  return { roles, categoria, usuario, obraArte };
}
module.exports = { createData };
