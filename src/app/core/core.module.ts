import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {AvatarModule} from 'primeng/avatar';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    CardModule,
    ChartModule
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    CardModule,
    ChartModule
  ]
})
export class CoreModule { }
