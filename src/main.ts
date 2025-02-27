import {getFileContent} from "./modules/fileReader";
import {ClientFactory} from "./factories/clientFactory";
import {Client} from "./entities/client";
import {fetchData} from "./modules/apiClient";

main('clients_data.json');

async function main(filename: string) {
    try {
        const fileContent: string = await getFileContent(filename);
        const clientsFromJson: Client[] = ClientFactory.fromJSON(fileContent);
        console.log('clientsFromJson', clientsFromJson);

        const clientsFromArray: Client[] = ClientFactory.fromStringArrays([
            ['3', 'Bob', '25', 'example@gmail.com'],
            ['4', 'Alice', '30', 'alice@example.com'],
            ['5', 'Charlie', '28', 'charlie@example.com'],
            ['6', 'Dave', '35', 'dave@example.com'],
            ['7', 'Eve', '22', 'eve@example.com']
        ]);
        console.log('clientsFromArray', clientsFromArray);

        const clientsFromApiResponse = ClientFactory.fromApiResponse(await fetchData('https://url'));
        console.log('clientsFromApiResponse', clientsFromApiResponse);

    } catch (e) {
        console.error(e);
    }
}
