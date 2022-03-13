enum NodeType {
    Folder = 'folder',
    File = 'file',
    Unset = 'unset'
}

/** @todo isNamed is a ui only prop so it should probably get moved somewhere else in future */
class NodeModel {
    type: NodeType;
    name?: string;
    children?: NodeModel[];
    id: string;
    isNamed: boolean = false;
    constructor(id: string, type: NodeType = NodeType.Unset) {
        this.id = id;
        this.type = type;
    }
}

export { NodeModel, NodeType }