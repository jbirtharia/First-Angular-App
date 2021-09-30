import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Following line will check file which is annotted by @NgModule i.e. AppModule.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
