class persona{
   constructor(nombre){
      this.nombre=nombre;
      this.peso=0;
      this.altura=0;
      this.dinero=1000;
   }
   hacerDeposito(banco, cuenta, cantidad){
      //proceso  para el pago
      this.dinero-=cantidad;
   }
}
