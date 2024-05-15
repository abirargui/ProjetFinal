import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  nom = '';
  prenom = '';
  email = '';
  datenais = '';
  telephone = '';
  dateemboche = '';
  role = '';
  motdepasse = '';
  confirmMotdepasse = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.motdepasse !== this.confirmMotdepasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const utilisateurs = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      datenais: this.datenais,
      telephone: this.telephone,
      dateemboche: this.dateemboche,
      role: this.role,
      motdepasse: this.motdepasse
    };

    this.authService.register(utilisateurs).subscribe(
      response => {
        console.log('Inscription réussie', response);
        // rediriger ou afficher un message de succès
      },
      error => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }

}
