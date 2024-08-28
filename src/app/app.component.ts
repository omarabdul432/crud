import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { addDoc, collection } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private firestore: Firestore) { }

  title = 'crud';
  async ngOnInit() {
    await addDoc(collection(this.firestore, 'users'), {
      username: 'omar',
      password: 'omar123'
    })

  }
}
