"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config/config"));
const index_1 = __importDefault(require("./routes/index"));
const db_connection_1 = require("./config/db.connection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use('/api', index_1.default);
const PORT = config_1.default.PORT || 8080;
(0, db_connection_1.dbConnection)().then(() => console.log('Connect to MongoDB'));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
