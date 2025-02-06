
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getComponents } from './components/all';
import { MaterialComponentsModule } from '../materialcomponents.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [ 
        CommonModule,
        SharedModule,
        MaterialComponentsModule,
    ],
    declarations: [...getComponents()],
    exports: [...getComponents()]
})
export class {Name_pascalized}Module {}