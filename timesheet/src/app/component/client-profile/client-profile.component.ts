import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';


export interface Client {
  id: number;
  name: string;
  email: string;
  review: string;
  project: string;
  rating: number;
  photoUrl: string; // Ajout du champ photoUrl
}

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
  client: Client = {
    id: 0,
    name: '',
    email: '',
    review: '',
    project: '',
    rating: 0,
    photoUrl: '' // Ajout du champ photoUrl
  };
  selectedFile: File | null = null;

  constructor(private reviewService: ReviewService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Pour prévisualiser l'image sélectionnée
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.client.photoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitReview() {
    if (this.selectedFile) {
      // Vous pouvez ajouter ici la logique pour uploader le fichier sur le serveur.
      // Pour l'instant, nous allons simplement utiliser l'URL de la photo.
      this.client.photoUrl = this.client.photoUrl || '';
    }

    this.reviewService.addReview(this.client);
    this.client = {
      id: 0,
      name: '',
      email: '',
      review: '',
      project: '',
      rating: 0,
      photoUrl: ''
    };
    this.selectedFile = null;
  }

}
