import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  
})
export class ConnexionComponent {
  email = '';
  motdepasse = '';

  constructor(private authService: AuthService) {}

  login() {
    const credentials = {
      email: this.email,
      motdepasse: this.motdepasse
    };

    this.authService.login(credentials).subscribe(
      response => {
        console.log('Connexion réussie', response);
        // Stocker le token et rediriger ou afficher un message de succès
      },
      error => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }
}
