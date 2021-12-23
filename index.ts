// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Folder Count Size</h1>`;

interface Directory {
  name: string;
  size?: number;
  type: string;
  files?: Directory[];
}

class Folder {
  queue: Directory[] = [];
  size: number = 0;
  constructor(private folder: Array<Directory>) {
    this.queue = folder.concat();
  }

  getSize(): number {
    while (this.queue.length) {
      let item = this.queue.pop();
      if (item.type === 'directory') {
        let tempQueue = this.queue;
        this.queue = tempQueue.concat(...item.files);
      } else {
        this.size += item.size;
      }
    }
    return this.size;
  }
}

const folder1: Array<Directory> = [
  { type: 'file', size: 10, name: 'file1' },
  { type: 'file', size: 10, name: 'file2' },
  {
    type: 'directory',
    name: 'Directory 1',
    files: [
      { type: 'file', size: 10, name: 'file3' },
      { type: 'file', size: 10, name: 'file4' },
    ],
  },
  { type: 'file', size: 10, name: 'file5' },
  { type: 'file', size: 10, name: 'file6' },
  {
    type: 'directory',
    name: 'Directory 2',
    files: [
      { type: 'file', size: 10, name: 'file7' },
      { type: 'file', size: 10, name: 'file8' },
    ],
  },
  { type: 'file', size: 10, name: 'file7' },
  { type: 'file', size: 10, name: 'file8' },
  { type: 'file', size: 10, name: 'file9' },
];

const folder2: Array<Directory> = [
  { type: 'file', size: 10, name: 'file1' },
  { type: 'file', size: 10, name: 'file2' },
  {
    type: 'directory',
    name: 'Directory 1',
    files: [
      { type: 'file', size: 10, name: 'file3' },
      { type: 'file', size: 10, name: 'file4' },
    ],
  },
  { type: 'file', size: 10, name: 'file5' },
  { type: 'file', size: 10, name: 'file6' },
];

let folderCurrent1 = new Folder(folder1);
let folderSize1 = folderCurrent1.getSize();
console.log('folder size :', folderSize1);

let folderCurrent2 = new Folder(folder2);
let folderSize2 = folderCurrent2.getSize();
console.log('folder size 2:', folderSize2);
