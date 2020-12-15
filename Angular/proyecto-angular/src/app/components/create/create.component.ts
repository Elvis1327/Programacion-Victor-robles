import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';
import { Project } from '../../models/project';
import Swal from 'sweetalert2';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class FormularioComponent {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>
  constructor(private service: ProjectService, private _uploadPrivate: UploadService){
    this.title = 'Crear Proyecto'
    this.project = new Project('','','','',2019,'','');
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    };
    this.service.saveProject(this.project).subscribe((res)=>{
      console.log(res);

      Swal.fire({
        icon: 'success',
        text: 'Formulario con exito'
      });
      form.reset();
    },(err)=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        text: err.error.error.message
      });
    })
  };

  fileChangeEvent(fileinput: any){
    console.log(fileinput);
    this.filesToUpload = <Array<File>>fileinput.target.files;
  }
}
