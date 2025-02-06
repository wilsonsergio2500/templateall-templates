import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getComponents } from './components/all';

@NgModule({
    imports: [ 
        CommonModule,
    ],
    declarations: [...getComponents()],
    exports: [...getComponents()]
})
export class {Name_pascalized}Module {}