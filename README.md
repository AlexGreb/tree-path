# tree-path
List contents of directories in tree-like format.

## Usage
First you'll want to run this command in your project's root folder:
```
$ npm install tree-path
```

<em>cmd/shell</em>

```javascript
tree-path
```
Output:

```
your path
├── .gitignore
├── bin
│   └── tree-path.js
├── node_modules\
│   └── mri\
│       ├── lib\
│       │   ├── index.js
│       │   └── index.mjs
│       ├── license.md
│       ├── package.json
│       └── readme.md
├── package-lock.json
├── package.json
└── README.md

4 directories, 10 files
```
## Options

| Option  | Alias |      Description      |             Example |
|---------|:-----:|:---------------------:|--------------------:|
| --depth |  -d   | Specify depth of tree | tree-path --depth 3 |



