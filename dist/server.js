"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello from typescript+express");
});
app.get("/user", (req, res) => {
    const userUser = {
        id: 1,
        name: "John Doe",
        isActive: true
    };
    res.json({ userUser });
});
app.put("/update", (req, res) => {
    const updateData = req.body;
    // Logic to update user would go here
    res.json({ updateData });
});
app.delete("/delete/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    // Logic to delete user would go here
    if (isNaN(userId)) {
        res.json({ message: `User with id ${userId} not found` });
    }
    res.json({ userId });
});
app.post("/create", (req, res) => {
    const createUser = req.body;
    // Logic to create user would go here
    res.json({ createUser
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
