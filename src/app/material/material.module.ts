import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule,
    OverlayModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
