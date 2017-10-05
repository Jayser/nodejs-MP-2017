import { resolve } from 'path';
import csvToJSON from 'csvtojson';

import DirWatcher from './dirwatcher';
import Importer from './importer';

const dirWatcher = new DirWatcher();
const importer = new Importer();

dirWatcher.on('dirwatcher:changed', ({ path, filename }) => {
    importer.import(resolve(path, filename)).then((dataFromFile) => {
        csvToJSON().fromString(dataFromFile).on('csv', (jsonData) => {
            console.log('dataFromFile', jsonData);
        });
    });
});

dirWatcher.on('dirwatcher:changed', ({ path, filename }) => {
    const dataFromFile = importer.importSync(resolve(path, filename));
    csvToJSON().fromString(dataFromFile).on('csv', (jsonData) => {
        console.log('dataFromFile', jsonData);
    });
});

dirWatcher.watch(resolve('./dist/data'));