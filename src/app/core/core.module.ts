import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {AvatarModule} from 'primeng/avatar';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {SliderModule} from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    CardModule,
    ChartModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    BadgeModule
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    CardModule,
    ChartModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    BadgeModule
  ]
})
export class CoreModule { }
