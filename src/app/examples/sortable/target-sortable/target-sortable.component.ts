import { Component } from '@angular/core';

@Component({
    selector: 'target-sortable',
    template: `
    <h4>Sorting in droppable list</h4>
    <div class="row">
        <div class="col-sm-3">
            <div class="panel panel-warning">
                <div class="panel-heading">
                Available boxers
                </div>
                <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listBoxers" id="1" [dragCopy]="true">
                    <ul class="list-group" >
                        <li *ngFor="let item of listBoxers; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i"  id="1">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="panel panel-success">
                <div class="panel-heading">
                Target List
                </div>
                <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listTeamOne"  id="2">
                    <ul class="list-group" >
                        <li *ngFor="let item of listTeamOne; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i" id="2">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
})
export class TargetSortableComponent {
    listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
    listTeamTwo: Array<string> = [];
}

