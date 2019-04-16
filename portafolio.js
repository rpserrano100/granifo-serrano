// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/Antiescoreación.png",
    title: "Lorem ipsum 01",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/Cooktent.png",
    title: "Lorem ipsum 02",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/Giffy.png",
    title: "Lorem ipsum 03",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/Kporte.png",
    title: "Lorem ipsum 04",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/recreación.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/IMG_0415.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/IMG_0416.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/IMG_0417.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
