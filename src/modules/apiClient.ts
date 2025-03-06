import {FetchError} from "../errors";

export async function fetchData(url: string): Promise<{data: object[]}> {
    try {
        const response: Response = await fetch(url);
        return await response.json();
    } catch (e) {
        throw new FetchError(`Could not fetch response from ${url}. Message: ${e}`);
    }
}