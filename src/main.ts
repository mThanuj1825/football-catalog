import { router } from "./routes.ts";

router();

window.addEventListener("popstate", router);
