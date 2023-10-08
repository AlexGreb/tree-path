import path from 'path';
import {readdirSync} from 'fs';
import counter from './counter.js';
import {stdout} from 'node:process';

const symbols = {
    spacerNoNeighbour: '   ',
    spacerNeighbour: '│  ',
    keyNoNeighbour: '└─ ',
    keyNeighbour: '├─ ',
};

function isLastChild(node, neighbours) {
    return neighbours[neighbours.length - 1] === node;
}

export default function traversal(node, neighbours, source, depth = Infinity, startPath = '', curDepth = 1) {
    const isDirectory = node.isDirectory();
    stdout.write(
        (neighbours.length === 0 || isLastChild(node, neighbours) ?
            startPath + symbols.keyNoNeighbour + node.name :
            startPath + symbols.keyNeighbour + node.name)
        + '\n'
    );

    if(isDirectory) {
        counter.directories++;
        source = path.join(node.path, node.name);
        const currentNeighbours = readdirSync(source,{ withFileTypes: true });
        if(currentNeighbours.length) {
            startPath += neighbours.length === 0 || isLastChild(node, neighbours) ?
                symbols.spacerNoNeighbour :
                symbols.spacerNeighbour;
        }

        while (currentNeighbours.length) {
            const neighbour = currentNeighbours.shift()
            if(curDepth < depth) {
                traversal(neighbour, currentNeighbours, source, depth, startPath, curDepth+1);
            }
        }
    } else {
        counter.files++;
    }
}