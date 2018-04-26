// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrismComponent } from 'angular-prism';

import { routes, dndComponents, sortableComponents } from './demo-dnd.router';
import { DndModule } from '../../dnd/dnd.module';
import { DndSimpleComponent } from './dnd/simple';

@NgModule({
    imports: [CommonModule, FormsModule, DndModule.forRoot(), RouterModule.forChild(routes)],
    declarations: [PrismComponent, ...dndComponents, ...sortableComponents,DndSimpleComponent],
    exports: [...dndComponents, ...sortableComponents]
})
export class DemoDndModule { }