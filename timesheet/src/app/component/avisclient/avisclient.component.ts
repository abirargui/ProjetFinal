import { Component } from '@angular/core';

@Component({
  selector: 'app-avisclient',
  templateUrl: './avisclient.component.html',
  styleUrls: ['./avisclient.component.css']
})
export class AvisclientComponent {
  reviews = [
    { name: 'Soulaymen Argui', imageUrl: 'assets/img/profile1.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae justo auctor, lacinia risus vitae, eleifend enim.' },
    { name: 'Tayssir Boulifa', imageUrl: 'assets/img/profile3.jpg', comment: 'Nulla facilisi. Duis nec dolor eu leo fermentum fringilla. Vestibulum vulputate metus ut ex ultricies.' },
    { name: 'Kossay Boubaker', imageUrl: 'assets/img/profile1.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae justo auctor, lacinia risus vitae, eleifend enim.' }
    // Ajoutez d'autres avis au besoin
  ];

}
