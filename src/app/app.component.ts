import { Component } from '@angular/core';
import { NodeModel } from 'src/models/node.model';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MableTree';

  constructor(private treeService: TreeService) { }

  get parentTree(): NodeModel[] {
    return this.treeService.treeItems;
  }

  addRootNode() {
    this.treeService.addRootNode();
  }


}
