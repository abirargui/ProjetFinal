import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  
})
export class ConnexionComponent {
  email: string | undefined;
  motdepasse: string | undefined;

  login() {
    // Vous pouvez implémenter ici la logique de connexion, par exemple, envoyer les données à un serveur
    console.log("Email :", this.email);
    console.log("Mot de passe :", this.motdepasse);
  }
}
