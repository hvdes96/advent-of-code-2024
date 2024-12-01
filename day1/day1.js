"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readFileContent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileContent = yield fs_1.promises.readFile("./day1/day1.txt", "utf8");
        const lines = fileContent.trim().split("\n");
        const columns = lines.map((line) => line.trim().split(/\s+/).map(Number));
        const column1 = columns.map((row) => row[0]);
        const column2 = columns.map((row) => row[1]);
        const counts = new Map();
        for (const num of column2) {
            counts.set(num, (counts.get(num) || 0) + 1);
        }
        const result = column1.reduce((sum, num) => {
            const multiplier = counts.get(num) || 0;
            return sum + num * multiplier;
        }, 0);
        console.log(result);
    }
    catch (e) {
        console.error("Error reading file:", e);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield readFileContent();
}))();
