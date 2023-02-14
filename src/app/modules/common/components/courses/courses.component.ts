import { Component, OnInit } from '@angular/core';
import { CategoryService, CategoryWithId } from '../../services/category.service';
import { CoursesService, CoursesWithId } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  allCategories!:CategoryWithId[];
  allCourses!: CoursesWithId[];

  constructor(private categoryService: CategoryService, private coursesService: CoursesService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    });

    this.coursesService.getAllCourses().subscribe(courses => {
      this.allCourses = courses;
    })
  }

}
