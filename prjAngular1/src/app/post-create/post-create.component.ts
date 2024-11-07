import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  // inputPost = '';
  newPost = 'Inisialisasi variabel';
  //String interpolation
  onSavePost() {
    alert("Halo Dunia")
    // this.inputPost = this.inputPost;
  }
}
