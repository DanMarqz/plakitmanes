var imgs = [];
imgs['Sardinilla'] = './assets/caballo.png';
imgs['Tocineto'] = './assets/cerdo.png';
imgs['Mixito'] = './assets/gatito.png';
imgs['Baltico'] = './assets/lobo.png';
imgs['Potito'] = './assets/pollo.png';
imgs['Resito'] = './assets/vaca.png';

var coleccion = [];

coleccion.push( new Plakitman( 'Sardinilla' , 140 , 65 , 'Tierra' ) );
coleccion.push( new Plakitman( 'Tocineto' , 95 , 50 , 'Fuego' ) );
coleccion.push( new Plakitman( 'Mixito' , 80 , 45 , 'Normal' ) );
coleccion.push( new Plakitman( 'Baltico' , 100 , 80 , 'Siniestro' ) );
coleccion.push( new Plakitman( 'Potito' , 40 , 15 , 'Volador' ) );
coleccion.push( new Plakitman( 'Resito' , 120 , 60 , 'Normal' ) );

for( platkin of coleccion){
  platkin.mostrar();
}