import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/service/flowbite service/flowbite.service';
import { NavBarComponent } from "./features/layout/nav-bar/nav-bar.component";
import { FooterComponent } from './features/layout/footer/footer.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent,FooterComponent,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-comm-v3';


  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {


   
   
  



    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
