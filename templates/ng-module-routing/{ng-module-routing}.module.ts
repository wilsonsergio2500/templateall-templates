
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllModuleComponents } from './components/all';
import { getAllModulePages } from './pages/all';
import { {Name_pascalized}RoutingModule } from './{Name_file}.routing.module';
import { MaterialComponentsModule } from '../materialcomponents.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: 
    [
        {Name_pascalized}Component,
        ...getAllModuleComponents(), 
        ...getAllModulePages()
    ],
    imports: [ 
        CommonModule,
        {Name_pascalized}RoutingModule,
        SharedModule,
        MaterialComponentsModule,
    ],
    
})
export class {Name_pascalized}Module {}