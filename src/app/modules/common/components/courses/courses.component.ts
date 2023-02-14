import { Component, OnInit } from '@angular/core';
import { CategoryService, CategoryWithId } from '../../services/category.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  allCategories!:CategoryWithId[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    });
  }

}
