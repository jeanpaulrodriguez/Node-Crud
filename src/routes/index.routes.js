import { Router } from "express";

import {
  renderPacientes,
  createPacientes,
  renderPacientesEdit,
  editPacientes,
  deletePacientes,
  toggleDone,
  renderPacientesHistorial,
} from "../controllers/paciente.controller";

const router = Router();

router.get("/", renderPacientes);

router.post("/pacientes/add", createPacientes);

router.get("/pacientes/:id/toggleDone", toggleDone);

router.get("/pacientes/:id/edit", renderPacientesEdit);

router.post("/pacientes/:id/edit", editPacientes);

router.get("/pacientes/:id/delete", deletePacientes);

router.get("/pacientes/:id/historial", renderPacientesHistorial);



export default router;
