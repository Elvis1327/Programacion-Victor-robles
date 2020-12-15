export class Contacto{
  public nombre: string;
  public apellidos: string;
  public email: string;
  public mensaje: string;
  constructor(nombre,apellidos,email,mensaje){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.mensaje = mensaje
  }
}
