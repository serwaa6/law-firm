import {Router} from "https://deno.land/x/oak/mod.ts";
import { getOneCase,getAllCases, addCase, editCase, deleteCase } from "./controllers/caseController.ts";

const router = new Router();


router.get('/api/v1/cases',getAllCases)

router.get('/api/v1/cases/:id', getOneCase)

router.post('/api/v1/case',addCase)

router.put('/api/v1/case/:id',editCase)

router.delete('/api/v1/cases/remove/:id',deleteCase)

export default router

