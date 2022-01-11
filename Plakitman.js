class Plakitman{
  constructor( nombre , vida , ataque , tipo ){
    this.image = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.tipo = tipo; 

    this.image.src = imgs[this.nombre];
  }
  hablar(){
    console.log(`Hola soy ${this.nombre}`);
  }
  mostrar(){
    document.body.appendChild(this.image)
    document.write('<br /><strong>' + this.nombre + '</strong><br />')
    document.write('Vida: ' + this.vida + '<br />')
    document.write('Ataque: ' + this.ataque + '<br />')
    document.write('Tipo: ' + this.tipo + '<hr />')
  }
}
