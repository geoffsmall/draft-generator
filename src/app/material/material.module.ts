import { NgModule } from '@angular/core';

import {
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatListModule, 
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatCardModule, 
        MatListModule, 
        MatIconModule, 
        MatMenuModule, 
        MatDialogModule, 
        MatTabsModule, 
        MatExpansionModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatCardModule, 
        MatListModule, 
        MatIconModule, 
        MatMenuModule, 
        MatDialogModule, 
        MatTabsModule, 
        MatExpansionModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule
    ]
  })
  export class MaterialModule { }