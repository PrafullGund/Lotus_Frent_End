import { Component } from '@angular/core';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrls: ['./course-data.component.css']
})
export class CourseDataComponent {
  columns = ["Name", "Email", "Mob No.", "Course Name","Status"];
 rows = [
  {
    "Name": "John",
    "Email": "qwqert@gmail.com",
    "Mob No.": "1234567812",
    "Course Name": "PHP",
    "Status":''
  }
] as { [key: string]: string }[];

}
