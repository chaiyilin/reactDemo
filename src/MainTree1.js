import React, {Component} from 'react';
import {Tree, Input} from 'antd';
const TreeNode = Tree.TreeNode;
const Search = Input.Search;

class MainTree extends Component {

    onSelect = (info) => {
        console.log('selected', info);
    };


    render() {
        return (
            <Tree defaultExpandAll showLine
                  onSelect={this.onSelect}
            >
                <TreeNode title="parent 1">
                    <TreeNode title="parent 1-0">
                        <TreeNode title="leaf"/>
                        <TreeNode title="leaf"/>
                    </TreeNode>
                    <TreeNode title="parent 1-1">
                        <TreeNode title="aaa"/>
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

export default MainTree;