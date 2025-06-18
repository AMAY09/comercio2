import express from "express";

const api = express();
api.get("/", (req, res) => {
    res.json({
        message: "API live running",
    });
});

export default api;
