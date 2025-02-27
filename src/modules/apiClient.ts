export async function fetchData(url: string): Promise<string> {
    // return await fetch(url);
    return new Promise((resolve) => {
        setTimeout(() => resolve(JSON.stringify([
                {
                    "id": "8",
                    "username": "John",
                    "age": "27",
                    "email": "john.doe@example.com"
                },
                {
                    "id": "9",
                    "username": "Emma",
                    "age": "32",
                    "email": "emma.lee@example.com"
                },
                {
                    "id": "10",
                    "username": "Michael",
                    "age": "29",
                    "email": "michael.smith@example.com"
                },
                {
                    "id": "11",
                    "username": "Sophia",
                    "age": "24",
                    "email": "sophia.jones@example.com"
                },
                {
                    "id": "12",
                    "username": "Liam",
                    "age": "31",
                    "email": "liam.brown@example.com"
                }
            ]
        )), 1000);
    })
}