import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {path:'productDetails/:id',renderMode:RenderMode.Server},
  {path:'addres/:cartId',renderMode:RenderMode.Server},
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
