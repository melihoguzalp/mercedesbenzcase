import { Component, Injector } from '@angular/core';
import { RequestService } from './services/request.service';
import { ApiConst } from './ApiConst';
import { ApiResponse } from './models/ApiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mercedescase';

  constructor(private service : RequestService) {
  }

  getVehicle(){
    console.log("test");
    this.service.get();
  }
}
