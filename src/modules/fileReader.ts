import * as fs from "node:fs";

export function getFileContent(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    })
}