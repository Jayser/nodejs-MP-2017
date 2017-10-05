import { readFile, readFileSync } from 'fs';

const UTF8 = 'utf8';

class Importer {
    import(path, encoding = UTF8) {
        return new Promise((res, rej) => {
            readFile(path, encoding, (err, data) => {
                err ? rej(err) : res(data);
            });
        });
    }

    importSync(path, encoding = UTF8) {
        return readFileSync(path, encoding);
    }
}

export default Importer;