import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  courses!: Observable<any[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.courses = this.db.collection('courses').valueChanges();
  }
}
