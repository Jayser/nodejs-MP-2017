import fs from 'fs';
import { EventEmitter } from 'events';

class DirWatcher extends EventEmitter {
    watch(path, delay) {
        fs.watch(path, (event, filename) => {
            if (filename) {
                this.emit('dirwatcher:changed', {
                    event,
                    filename,
                    path,
                });
            } else {
                console.log('filename not provided');
            }
        });
    }
}

export default DirWatcher;