
import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { filter } from "rxjs";
import { {Name_pascalized}DialogComponent, {Name_pascalized}DialogParams, {Name_pascalized}DialogResponse } from './{Name_file}-dialog.component';

@Injectable()
export class {Name_pascalized}DialogService{

    constructor(private readonly dialog: MatDialog) { }

    OnOpen(params : {Name_pascalized}DialogParams) : Observable<{Name_pascalized}DialogResponse> {
        const dialogInstance = this.dialog.open({Name_pascalized}DialogComponent, {
            width: '600px',
            data: params,
            disableClose: true
          });
          return dialogInstance.afterClosed().pipe(filter(x => !!x));
    }
}