import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormListComponent } from './form-list/form-list.component';
import { ActiveComponent } from './shared/active/active.component';



@NgModule({
  declarations: [FormEditComponent, FormListComponent, ActiveComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormListComponent
  ]
})
export class FormsModule { }
