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
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule
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
        MatToolbarModule,
        MatStepperModule,
        MatFormFieldModule
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
        MatToolbarModule,
        MatStepperModule,
        MatFormFieldModule
    ]
  })
  export class MaterialModule { }