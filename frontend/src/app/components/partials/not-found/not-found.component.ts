import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule,RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input()
  Visible = false;
  @Input()
  NotFoundMessage = 'Page not found';
  @Input()
  ResetLink = '/';
  @Input()  
  ResetLinkText = 'Go to Homepage';
  constructor() {
  }

}
