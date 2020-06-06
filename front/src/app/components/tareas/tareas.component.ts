import { Component, OnInit } from '@angular/core';

// Importar el modelo
import { Tareas } from '../../models/tareas';

// Importar el servicio
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  // Declarar la variable de tipo Modelo
  public tareaRegistrada: Tareas; 

  // Declarar la variable de tipo Arreglo
public tareasEncontradas: any=[];

  constructor(private tareaService : TareasService) {
    this.tareaRegistrada= new Tareas("", "", "", "");
   } 

  ngOnInit(): void {
    // Iniciamos el método de mostrarTareas();
    this.mostarTareas();
  }

  // Consumimos el servicio con el metodo agregarTarea();

  agregarTarea(){
    this.tareaService.crearTarea(this.tareaRegistrada).subscribe(
      (response: any)=>{
        let tareas = response.tarea;
        this.tareaRegistrada = tareas;
        if(!this.tareaRegistrada._id){
          alert("Error al registrar tarea");
        }else{
          alert(`Asignación de tarea exitosa, ${this.tareaRegistrada.nombreEncargado} tiene una nueva tarea`);
          this.tareaRegistrada = new Tareas("", "", "", "");
          this.mostarTareas();
        }
      },
      (error)=>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
      );
  }

  // Consumimos el servicio con el método mostrarTareas();

  mostarTareas(){
    this.tareaService.obtenerTareas().subscribe(
      (response : any)=>{
        this.tareasEncontradas = response.tareas;
      },
      (error)=>{
        var errorMensaje = <any>error;
        if(errorMensaje !=null){
          console.log(error);
        }
      }
    );
  }

  // Consumimos el servicio con el método editarTarea();
editarTarea(tarea){
  this.tareaService.actualizarTarea(tarea._id, tarea).subscribe(
    (response : any)=>{
      if(response.tarea){
        alert("La tarea ha sido actualizada correctamente");
        this.mostarTareas();
      } else {
        alert("No fue posible actualizar la tarea");
      }
    },
    (error) => {
      var errorMensaje = <any>error;
      if(errorMensaje != null){
        console.log(error);
      }
    }
  );
}

  // Consumios el servicio con el método eliminarTarea();
  eliminarTarea(idTarea){
    this.tareaService.eliminarTarea(idTarea).subscribe(
      (response : any) =>{
        if(response.tarea){
          alert("La tarea ha sido eliminada correctamente");
          this.mostarTareas();
        }else{
          alert("No se pudo eliminar la tarea");
      }
      },
      (error) =>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }
}




