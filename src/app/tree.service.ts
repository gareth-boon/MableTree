import { Injectable } from '@angular/core';
import { NodeModel, NodeType } from 'src/models/node.model';

/** @todo switch to a binary tree or something more optimized */
@Injectable({
  providedIn: 'root'
})
export class TreeService {
  _treeItems: NodeModel[] = []
  _nextIdentifier: number = 0;   /** @todo Confirm what the intention of id on NodeType is and change to something other than sequential number if needed. */

  getNewNode(type: NodeType) {
    const newNode = new NodeModel(`${this._nextIdentifier}`, type);
    this._nextIdentifier++;
    return newNode;
  }

  addRootNode() {
    this._treeItems.push(this.getNewNode(NodeType.Folder));
  }

  saveNode(node: NodeModel) {
    node.isNamed = true;
  }

  setNodeType(node: NodeModel, type: NodeType) {
    node.type = type;
  }

  addChildNode(parentNode: NodeModel) {
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push(this.getNewNode(NodeType.Unset));
    this._treeItems = this._treeItems.concat([]);
  }

  removeNode(selectedNode: NodeModel) {
    const nodeIndex = this._treeItems.findIndex(node => node.id === selectedNode.id);
    if (nodeIndex >= 0) {
      this._treeItems.splice(nodeIndex, 1);
    } else {
      for (let i = 0; i < this._treeItems.length; i++) {
        this.removeNodeInternal(this._treeItems[i], selectedNode);
      }
    }
  }

  removeNodeInternal(topNode: NodeModel, selectedNode: NodeModel) {
    if (topNode.children) {
      for (let i = 0; i < topNode.children.length; i++) {
        if (topNode.children[i].id == selectedNode.id) {
          topNode.children.splice(i, 1);
          return;
        } else {
          this.removeNodeInternal(topNode.children[i], selectedNode);
        }
      }
    } else {
      return;
    }
  }

  get treeItems(): NodeModel[] {
    return this._treeItems;
  }

}
