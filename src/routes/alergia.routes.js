import { Router } from "express";
import { createAlergia,findAllAlergias,findOneAlergia,updateAlergia,deleteAlergia,deleteAllAlergias } from "../controllers/alergia.controller.js";

const router = Router();

// Create a new Tutorial
router.post("/", createAlergia);

// Retrieve all Tutorials
router.get("/", findAllAlergias);

// Retrieve a single Tutorial with id
router.get("/:id", findOneAlergia);

// Update a Tutorial with id
router.put("/:id", updateAlergia);

// Delete a Tutorial with id
router.delete("/:id", deleteAlergia);

// Delete all Tutorials
router.delete("/", deleteAllAlergias);

export default router;