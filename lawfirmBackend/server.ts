import { Application} from "https://deno.land/x/oak/mod.ts";
import { parse } from 'https://deno.land/std/flags/mod.ts';
import router from './router.ts'


const { args } = Deno;
const DEFAULT_PORT = 5000;
const argPort = parse(args).port;

const app = new Application();
const port = 5000


app.use(router.routes())
app.use(router.allowedMethods())
console.log('Server start on http://localhost:5000')
await app.listen({port: argPort ? Number(argPort) : DEFAULT_PORT})

