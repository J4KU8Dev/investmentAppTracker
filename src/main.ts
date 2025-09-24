import 'zone.js'; 
import { platformBrowserTesting } from "@angular/platform-browser/testing";
import { AppModule } from "./app/app.module";

platformBrowserTesting().bootstrapModule(AppModule);
