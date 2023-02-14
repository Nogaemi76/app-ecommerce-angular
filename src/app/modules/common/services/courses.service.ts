import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

export interface Courses {
  catgegory: string;
  description: string;
  price: number;
  title: string;
  urlImage: string;
}
export interface CoursesWithId extends Courses { id: string }

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private coursesCollection!: AngularFirestoreCollection<Courses>;
  courses!: Observable<CoursesWithId[]>;

  constructor(private db: AngularFirestore) { }

  getAllCourses() {
    this.coursesCollection = this.db.collection<Courses>('courses');

    this.courses = this.coursesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Courses;
        const id = a.payload.doc.id;
        // console.log(data);
        // console.log(id);
        return { id: id, ...data};
      }))
    );
    return this.courses;
  }
}
