import { enableProdMode } from '@angular/core';
import { bootloader } from '@angularclass/hmr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { decorateModuleRef } from './environment';

if (webpack.ENV === 'production') {
    enableProdMode();
}

export function main(): Promise<any> {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(decorateModuleRef)
        .catch((err: any) => console.error(err));
}

bootloader(main);
