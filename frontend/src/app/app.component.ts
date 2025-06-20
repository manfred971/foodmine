import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, RouterOutlet],//fixed here
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//fixed here 
})
export class AppComponent {
  title = 'frontend';
}
