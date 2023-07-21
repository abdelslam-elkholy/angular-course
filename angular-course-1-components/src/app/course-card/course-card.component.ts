import { Component, Input } from "@angular/core";
import { COURSES } from "../../db-data";
import { Course } from "../model/course";
@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  onCourseView() {
    console.log("i'm working");
  }
}
