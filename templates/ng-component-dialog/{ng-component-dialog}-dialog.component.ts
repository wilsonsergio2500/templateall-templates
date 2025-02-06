import { Inject, Component, AfterContentInit, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type {Name_pascalized}DialogParams = {title: string;}
export type {Name_pascalized}DialogResponse = { }

@Component({
    selector: '{Name_file}-dialog',
    templateUrl: '{Name_file}-dialog.component.html',
    styleUrls: [`{Name_file}-dialog.component.scss`]
  })
export class {Name_pascalized}DialogComponent {
   
  form = this.formBuilder.group({
    name: [null, Validators.required],
  })

    constructor(
      @Inject(MAT_DIALOG_DATA) public readonly data: {Name_pascalized}DialogParams,
      private readonly dialogRef: MatDialogRef<{Name_pascalized}DialogComponent>,
      private readonly formBuilder: FormBuilder
    ) {
    }

    get invalid() {
      return this.form.invalid;
    }

    submit(){
      if(this.form.valid){
        
      }
    }

    close(){
      this.dialogRef.close();
    }
   
  
  } 