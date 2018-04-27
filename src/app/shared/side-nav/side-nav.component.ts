import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

export const componentsList = [
  'dnd-simple',
  'dnd-zone',
  'dnd-custom-data',
  'dnd-custom-function',
  'dnd-shopping-basket',
  'sortable-simple',
  'sortable-recycle-multi',
  'target-sortable',
  'sortable-simple-copy',
  'sortable-multi',
  'sortable-embedded',
];

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  @Input() activeTab: String;
  components = componentsList;

  constructor(private router: Router) {}

  isActive(currentRoute: any[]): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), true);
  }
}