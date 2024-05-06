import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  nom: string | undefined;
  prenom:string | undefined;
  email: string | undefined;
  datenais:Date | undefined;
  telephone:string | undefined;
  datedemboche:Date | undefined;
  role:string | undefined;
  motdepasse: string | undefined;

  register() {
    // Vous pouvez implémenter ici la logique d'inscription, par exemple, envoyer les données à un serveur
    console.log("Nom d'utilisateur :", this.nom);
    console.log("Prenom d'utilisateur :", this.prenom);
    console.log("Email :", this.email);
    console.log("Date de naissance:", this.datenais);
    console.log("Telephone :", this.telephone);
    console.log("Date d'emboche :", this.datedemboche);
    console.log("Role :", this.role);
    console.log("Mot de passe :", this.motdepasse);
  }

}
