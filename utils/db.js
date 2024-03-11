class DBClient {
    constructor() {
        this.host = process.env.DB_HOST || 'localhost';
        this.port = process.env.DB_PORT || 27017;
        this.database = process.env.DB_DATABASE || 'files_manager';
        // Create MongoDB client here
    }

    isAlive() {
        // Check if connection to MongoDB is alive
    }

    async nbUsers() {
        // Return the number of documents in the users collection
    }

    async nbFiles() {
        // Return the number of documents in the files collection
    }
}

const dbClient = new DBClient();

export default dbClient;
