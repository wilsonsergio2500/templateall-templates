
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAll{Name_pascalized}ModuleComponents } from './components/all';
import { getAll{Name_pascalized}ModulePages } from './pages/all';

@NgModule({
    imports: [ CommonModule],
    declarations: [...getAll{Name_pascalized}ModuleComponents(), ...getAll{Name_pascalized}ModulePages()],
    exports: [...getAll{Name_pascalized}ModuleComponents()]
})
export class {Name_pascalized}Module {}