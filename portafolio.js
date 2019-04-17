// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/Antiescoreación-min.png",
    title: "Philodry",
    about: "Primera capa antiexcoreación que protege e invita a hacer actividad física.",
}, {
    figure: "media/Cooktent-min.png",
    title: "Cooktent",
    about: "Cocinilla de inducción para camping, recargable en el auto.",
}, {
    figure: "media/Giffy-min.png",
    title: "Giffy",
    about: "Aplicación para encontrar el regalo perfecto.",
}, {
    figure: "media/Kporte-min.png",
    title: "Kporte",
    about: "Arnés especializado en distibuir correctamente el peso al transportar carretillas.",
}, {
    figure: "media/recreación-min.png",
    title: "Cocreación",
    about: "Rediseño de la marca de una emprendedora textil.",
}, {
    figure: "media/chinchillas-min.png",
    title: "Adaptación",
    about: "Estructura diseñada para lograr la integración de chinchillas al zoológico.",
}, {
    figure: "media/Pakta-min.png",
    title: "Pakta",
    about: "Tablas de sal para sazonar carnes en la parrilla.",
}, {
    figure: "media/Luminaria.png",
    title: "Luminaria",
    about: "Lámparas a crochet para ser utilizadas como espantacucos con el celular.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
