import traversal from './lib/traversal.js';
import path from 'node:path';
import {cwd, stdout} from 'node:process';
import {readdirSync} from 'node:fs';
import counter from './lib/counter.js';

export default function treePath(source = '.', options = {depth: Infinity}) {
    try {
        const absoluteDirPath = path.join(cwd(), source);
        stdout.write(absoluteDirPath + '\n');
        const neighbours = readdirSync(source, { withFileTypes: true });
        while(neighbours.length) {
            traversal(neighbours.shift(), neighbours, source, options.depth);
        }
        stdout.write(
            `${counter.directories} directories, ${counter.files} files\n`
        );
    } catch (e) {
        throw new Error(e.message);
    }
}

