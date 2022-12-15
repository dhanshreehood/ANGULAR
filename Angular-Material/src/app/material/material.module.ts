import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';


//u can make variable and add that variable in your imports
const material=[
  MatButtonModule, 
  MatIconModule, 
  MatDividerModule,
  MatCardModule,
  MatBadgeModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSortModule,
  MatSnackBarModule,
  MatStepperModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatButtonModule,
    // MatIconModule,
    // MatDividerModule
    material //importing variable here
  ],
  //exporting it so that we can use it in the main app module, then we will import it in app.module.ts
  exports:[material]
})
export class MaterialModule { }
