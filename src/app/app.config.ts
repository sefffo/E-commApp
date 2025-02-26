import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { headersInterceptor } from './core/interceptors/headers/headers.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { error } from 'console';
import { errorHandlingInterceptor } from './core/interceptors/errors/error-handling.interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration: 'enabled'})), provideClientHydration(withEventReplay()),

    provideHttpClient(withFetch(),),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(NgxSpinnerModule),
    
  ]
};


// withInterceptors([headersInterceptor,errorHandlingInterceptor,loadingInterceptor])
