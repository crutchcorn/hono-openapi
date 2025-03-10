import {Hono} from 'hono'
import {indexApp} from "./routes/index/index.app.ts";

const app = new Hono()
  .route("/", indexApp);

export {app}
