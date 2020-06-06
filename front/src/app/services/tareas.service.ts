import { Injectable } from '@angular/core';

// Importar el módulo httpClient que nos va a ofrecer acceso a los métodos get, post, put y delete
import { HttpClient, HttpHeaders } from '@angular/common/http';

//
import { map } from 'rxjs/operators';

//Se encargará de recoger las peticiones que hagamos al subscribirnos a un servicio
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  // Creamos la variable que contiene la ruta de la api que vamos a consumir
  url = 'http://localhost:3000/api/';

  /* 
  Crearemos una variable privada de tipo HttpClient que nos permitirá 
  tener acceso a los métodos post, put, get & delete para interactuar correctamente 
  con nuestra API
  */
  constructor(private _http: HttpClient) { }

  // Servicio crear tarea
  crearTarea(tareaNueva){
    let params = JSON.stringify(tareaNueva);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // localhost:3000/api/ -> api.post('/',TareaControl.crearTarea)
    return this._http.post(
      this.url,
      params,
      options
    ).pipe(map(res => res));
  }

  // Servicio Obtener Tareas
  obtenerTareas(){
    return this._http.get(
      this.url
    ).pipe(map(res => res));
  }
  // Servicio Actualizar Tarea
actualizarTarea(idTarea, tareaActualizada){
  let params = JSON.stringify(tareaActualizada);
  let options = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  return this._http.put(
    this.url + idTarea,
    params,
    options
  ).pipe(map(res => res));
}

  // Servicio Eliminar Tarea
  eliminarTarea(idTarea){
    let options= {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this._http.delete(
        this.url + idTarea,
    options
    ).pipe(map(res => res));
  
  }
}
