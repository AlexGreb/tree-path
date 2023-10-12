#! /usr/bin/env node
import treePath from '../treePath.js';
import {parseArgs} from 'node:util';


const options = {
  depth: {
    type: 'string',
    short: 'd',
    default: 'Infinity'
  }
};

const {
  values,
  positionals
} = parseArgs({options, strict: false});

const source = positionals[0];

treePath(source, values);
