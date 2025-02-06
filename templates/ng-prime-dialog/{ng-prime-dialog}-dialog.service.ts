
import { Injectable } from '@angular/core';
import { Observable, filter, map } from "rxjs";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { {Name_pascalized}DialogComponent, {Name_pascalized}DialogParams, {Name_pascalized}DialogResponse } from './{Name_file}-dialog.component';

@Injectable()
export class {Name_pascalized}DialogService{

    constructor(private dialogService: DialogService) { }

    OnOpen(params : {Name_pascalized}DialogParams) : Observable<{Name_pascalized}DialogResponse> {
        const ref: DynamicDialogRef = this.dialogService.open({Name_pascalized}DialogComponent, {
            width: '300px',
            baseZIndex: 10000,
            data: { ...params },
          });
          return ref.onClose.pipe(filter(value => !!value), map(value => value))
    }
}