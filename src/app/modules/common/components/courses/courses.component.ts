import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, mergeMap, Subscription } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  allCategories!:any[];
  allCourses!: any[];
  subscription!: Subscription;

  constructor(private categoryService: CategoryService, private coursesService: CoursesService) { }

  ngOnInit() {
    this.subscription = this.categoryService.getAllCategories()
      .pipe(mergeMap(categories => this.coursesService.getAllCourses().pipe(
        map(courses => [categories, courses])
      ))).subscribe(([categories, courses]) => {
        this.allCategories = categories;
        this.allCourses = courses;
      });
  }

  getCoursesByCatId(catId: string) {
    return this.allCourses.filter(course => course.category == catId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
