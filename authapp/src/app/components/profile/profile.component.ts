import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  title = 'profile component';

  constructor(private auth: Auth) {
    
  }
}