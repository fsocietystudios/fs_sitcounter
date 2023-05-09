module.exports = {
    async run(client) {
        async function updateData(client) {
            await SaveResourceFile(client.resourceName, "server/data/data.json", JSON.stringify(client.data), -1)

            client.data = JSON.parse(LoadResourceFile(client.resourceName, "server/data/data.json"));
        }

        setInterval(async () => { await updateData(client); }, 60 * 1000);
    }
}