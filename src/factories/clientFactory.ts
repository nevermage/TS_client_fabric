import {Client} from "../entities/client";

export class ClientFactory {
    static fromJSON(clientsJson: string): Client[] {
        return this.objectsToClients(JSON.parse(clientsJson).clients);
    }

    static fromStringArrays(clients: string[][]): Client[] {
        return clients.map(([id, username, age, email]: string[]) =>
            new Client(
                parseInt(id),
                username,
                parseInt(age),
                email,
            )
        )
    }

    static fromApiResponse(apiResponse: {data: object[]}): Client[] {
        return this.objectsToClients(apiResponse.data);
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