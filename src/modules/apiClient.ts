export async function fetchData(url: string): Promise<{data: object[]}> {
    const response: Response = await fetch(url);
    return await response.json();
}