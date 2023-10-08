#! /usr/bin/env node
import mri from 'mri';
import treePath from '../treePath.js';

const argv = process.argv.slice(2);
const defaultOptions = {
  depth: Infinity,
};

const userOptions = mri(argv, {
  alias: {
    d: 'depth'
  },
});

const options = Object.assign(defaultOptions, userOptions);
const source = userOptions._[0];

treePath(source, options);
