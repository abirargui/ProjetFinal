
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface utilisateurs {
  nom: string;
  prenom: string;
  email: string;
  datenais: string;
  telephone: string;
  dateemboche: string;
  role: string;
  motdepasse: string;
  confirmMotdepasse: string;
}
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent{
  utilisateur: utilisateurs = {
    nom: '',
    prenom: '',
    email: '',
    datenais: '',
    telephone: '',
    dateemboche: '',
    role: '',
    motdepasse: '',
    confirmMotdepasse: ''
  };

  constructor(private userService: AuthService, private router: Router) {}

  register() {
    if (this.utilisateur.motdepasse !== this.utilisateur.confirmMotdepasse) {
      alert('Passwords do not match');
      return;
    }
    console.log(this.utilisateur)

    this.userService.register(this.utilisateur).subscribe(
      response => {         
        alert(response.msg);
        this.router.navigate(['/connexion']);
      },
      error => {
          alert(error.error.err)
      }
    );
  }
}
