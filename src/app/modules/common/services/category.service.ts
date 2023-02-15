import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

export interface Category { label: string; }
export interface CategoryWithId extends Category { id: string; }

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private categoryCollection!: AngularFirestoreCollection<Category>;
  categories!: Observable<CategoryWithId[]>;

  constructor(private db: AngularFirestore) { }

  getAllCategories() {
    this.categoryCollection = this.db.collection<Category>('categories');

    this.categories = this.categoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id = a.payload.doc.id;
        return {id: id, ...data};
      }))
    );
    return this.categories;
  }
}
