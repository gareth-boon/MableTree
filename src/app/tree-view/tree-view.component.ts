import { Component, Input } from '@angular/core';
import { NodeModel, NodeType } from 'src/models/node.model';
import { IconPath } from '../constants';
import { TreeService } from '../tree.service';

/** @todo add isExpanded prop to enable collapsing the tree */
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  NodeTypes = NodeType;

  /** @todo use proper icons */
  folderIcon = `${IconPath}/folder-open-regular.svg`
  checkIcon = `${IconPath}/check.svg`;
  crossIcon = `${IconPath}/cross.svg`;
  trashIcon = `${IconPath}/trash.svg`;
  plusIcon = `${IconPath}/plus.svg`;
  fileIcon = `${IconPath}/file-regular.svg`;

  @Input() treeItems: NodeModel[] = [];

  constructor(public treeService: TreeService) { }

  saveNode(item: NodeModel) {
    this.treeService.saveNode(item);
  }

  addChildNode(item: NodeModel) {
    this.treeService.addChildNode(item);
  }

  setNodeType(item: NodeModel, type: NodeType) {
    this.treeService.setNodeType(item, type);
  }

  removeNode(item: NodeModel) {
    this.treeService.removeNode(item);
  }

}
