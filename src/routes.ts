import { HomePage } from "./pages/Home.ts";
import { render, type TemplateResult } from "lit";

const routes: Record<string, () => TemplateResult> = {
    "/": HomePage,
};

export const router = () => {
    const app = document.getElementById("app")!;
    const path = window.location.pathname;

    const page = routes[path];

    if (page) {
        render(page(), app);
    } else {
        app.innerHTML = "<h1>404 Not Found</h1>";
    }
};
