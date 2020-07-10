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

  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    // this._studentService.getStudentDetails().subscribe((data: any[]) => {
    //   // console.log(data);
    //   this.studentDetails = data;
    // });

    this.studentDetails = this._studentService.getStudentDetails()
  }

  sort(colName) {
    this.studentDetails.sort((a, b) =>
      a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0
    );
  }

  
}
