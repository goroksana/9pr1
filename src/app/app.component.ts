import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GreetComponent,NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prNine';
  greeting = 'Oksana';

  names=[{name: "Inna"}, {name:"Olga"}, {name:"Olena"}];

}
