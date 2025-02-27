import {Client} from "../entities/client";

export class ClientFactory {
    static fromJSON(clientsJson: string): Client[] {
        return this.objectsToClients(JSON.parse(clientsJson).clients);
    }

    static fromStringArrays(clients: string[][]): Client[] {
        return clients.map((clientArray: string[]) =>
            new Client(
                parseInt(clientArray[0]),
                clientArray[1],
                parseInt(clientArray[2]),
                clientArray[3],
            )
        )
    }

    static fromApiResponse(apiResponse: string): Client[] {
        return this.objectsToClients(JSON.parse(apiResponse));
    }

    private static objectsToClients(objects: Record<string, any>): Client[] {
        return objects.map((client: Record<string, any>) =>
            new Client(
                parseInt(client.id),
                client.username,
                parseInt(client.age ?? client.profile.age),
                client.email,
            )
        )
    }
}