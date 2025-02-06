import { Inject, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

export type {Name_pascalized}DialogParams = {title: string;}
export type {Name_pascalized}DialogResponse = { }

@Component({
    selector: '{Name_file}-dialog',
    templateUrl: '{Name_file}-dialog.component.html',
    styleUrls: [`{Name_file}-dialog.component.scss`]
  })
export class {Name_pascalized}DialogComponent {
   

  constructor(
    private readonly dialogRef: DynamicDialogRef,
    private readonly dialogConfig: DynamicDialogConfig
  ) { }

  get params(): {Name_pascalized}DialogParams {
    return { ...this.dialogConfig.data };
  }

  cancel() {
    this.dialogRef.close();
  }
   
  
  } 