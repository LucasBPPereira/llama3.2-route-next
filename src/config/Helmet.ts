import { createRequire } from "module";
const require = createRequire(import.meta.url);
const helmet = require("helmet")

export class HelmetConfig{
     public getMiddleware() {
        return helmet({
            contentSecurityPolicy: false,
        })
     }
}