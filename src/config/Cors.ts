import cors, { type CorsOptions } from "cors";

export class CorsConfig {
    private options: CorsOptions;

    constructor() {
        this.options = {
            credentials: true,
            methods: ["POST", "GET", "PUT", "DELETE"],
            origin: this.originsConfig(),
        }
    }

    private originsConfig(): string | string[] {
        const env = process.env.NODE_ENV || "development";
        if (env === "production") {
            return ""
        }

        return ["http://localhost:3000", "http://localhost:3001"];
    }

    public getMiddleware() {
        return cors(this.options);
    }
}