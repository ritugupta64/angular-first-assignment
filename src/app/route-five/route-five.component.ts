import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.css'],
  providers: [StudentService]
})
export class RouteFiveComponent implements OnInit {

  studentDetails = [];

  constructor(private _studentService: StudentService) {
   
  }

  ngOnInit() {

    this._studentService.getStudentDetails().subscribe((data: any[])=>{
     // console.log(data);
      this.studentDetails = data;
    })  
  }

}





