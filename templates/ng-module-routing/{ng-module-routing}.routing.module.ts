import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { {Name_pascalized}Component } from './{Name_file}.component';
import { Page1Component } from './pages/page-1/page-1.component';

const routes: Routes = [
    <Route>{ path: '', component:  {Name_pascalized}Component, children: [
        <Route>{ path: '', component: Page1Component },
        <Route>{ path: 'page1', component: Page1Component}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class {Name_pascalized}RoutingModule {}