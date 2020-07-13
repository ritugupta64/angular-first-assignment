import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { StudentService } from '../services/student.service';
// import { OrderbyPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.css'],
  providers: [StudentService],
})
export class RouteFiveComponent implements OnInit {
  studentDetails: any[] = [];

  headerDetails = ['ID', 'Name', 'Course', 'Marks'];

  sortType: string;
  sortReverse = {};

  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    // this._studentService.getStudentDetails().subscribe((data: any[]) => {
    //   // console.log(data);
    //   this.studentDetails = data;
    // });

    this.studentDetails = this._studentService.getStudentDetails();
  }

  dynamicSort(property: any) {
    let sortOrder = -1;

    if (this.sortReverse[property]) {
      sortOrder = 1;
    }

    return function (a: any, b: any) {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  sortOrders(property: any) {
    this.sortType = property;
    this.sortReverse[this.sortType] = !this.sortReverse[this.sortType];
    console.log(this.sortReverse, 'test')
    this.studentDetails.sort(this.dynamicSort(property));
  }
}
