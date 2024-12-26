import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerComponent } from './components/viewer/viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
