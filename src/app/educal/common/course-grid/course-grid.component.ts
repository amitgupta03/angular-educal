import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {

  courseData = [
    {
      id: 1,
      courseImage: "assets/img/course/course-1.png",
      listImg: "assets/img/course/list/course_list_1.jpeg",
      lesson: "60+",
      title: "Complete Angular Development : Zero to Hero.",
      rating: "4.5",
      teacherImg: "assets/img/course/teacher/teacher-1.jpg",
      teacherName: "Jim Séchen",
      category: "Development",
      price: "21.00",
      oldPrice: "33.00"
    },
    {
      id: 2,
      courseImage: "assets/img/course/course-2.png",
      listImg: "assets/img/course/list/course_list_2.jpeg",
      lesson: "72+",
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      rating: "4.0",
      teacherImg: "assets/img/course/teacher/teacher-2.jpg",
      teacherName: "Barry Tone",
      category: "Development",
      price: "32.00",
      oldPrice: "68.00",
      color: "sky-blue"
    },
    {
      id: 3,
      courseImage: "assets/img/course/course-3.jpg",
      listImg: "assets/img/course/list/course_list_3.jpeg",
      lesson: "70+",
      title: "The Complete JavaScript Course: From Zero to Expert!",
      rating: "4.3",
      teacherImg: "assets/img/course/teacher/teacher-3.jpg",
      teacherName: "Samuel Serif",
      category: "Development",
      price: "13.00",
      oldPrice: "19.00",
      color: "green"
    },
    {
      id: 4,
      courseImage: "assets/img/course/course-4.jpg",
      listImg: "assets/img/course/list/course_list_4.jpeg",
      lesson: "60+",
      title: "Learn Manual Software Testing + Agile with Jira Tool.",
      rating: "3.5",
      teacherImg: "assets/img/course/teacher/teacher-4.jpg",
      teacherName: "Elon Gated",
      category: "Testing",
      price: "62.00",
      oldPrice: "97.00",
      color: "blue"
    },
    {
      id: 5,
      courseImage: "assets/img/course/course-5.jpg",
      listImg: "assets/img/course/list/course_list_5.jpeg",
      lesson: "90+",
      title: "Java Programming for Complete Beginners.",
      rating: "4.5",
      teacherImg: "assets/img/course/teacher/teacher-5.jpg",
      teacherName: "Eleanor Fant",
      category: "Development",
      price: "25.00",
      oldPrice: "36.00",
      color: "orange"
    },
    {
      id: 6,
      courseImage: "assets/img/course/course-6.png",
      listImg: "assets/img/course/list/course_list_6.jpeg",
      lesson: "90+",
      title: "Complete Python Bootcamp From Zero to Hero in Python.",
      rating: "4.8",
      teacherImg: "assets/img/course/teacher/teacher-6.jpg",
      teacherName: "Brian Cumin",
      category: "Development",
      price: "35.00",
      oldPrice: "46.00",
      color: "pink"
    },
    {
      id: 7,
      courseImage: "assets/img/course/course-7.png",
      listImg: "assets/img/course/list/course_list_7.jpeg",
      lesson: "90+",
      title: "Vue - The Complete Guide (incl. Router & Composition API).",
      rating: "4.6",
      teacherImg: "assets/img/course/teacher/teacher-7.jpg",
      teacherName: "Pelican Steve",
      category: "Development",
      price: "46.00",
      oldPrice: "72.00",
      color: "orange"
    },
    {
      id: 8,
      courseImage: "assets/img/course/course-8.png",
      listImg: "assets/img/course/list/course_list_8.jpeg",
      lesson: "13",
      title: "Next.js Dev to Deployment.",
      rating: "4.4",
      teacherImg: "assets/img/course/teacher/teacher-8.jpg",
      teacherName: "Shahnewaz Sakil",
      category: "Development",
      price: "52.00",
      oldPrice: "72.00",
      color: "pink"
    },
    {
      id: 9,
      courseImage: "assets/img/course/course-9.gif",
      listImg: "assets/img/course/list/course_list_9.jpeg",
      lesson: "25",
      title: "Reactive Angular Course (with RxJs, Angular 14).",
      rating: "4.2",
      teacherImg: "assets/img/course/teacher/teacher-9.jpg",
      teacherName: "Hilary Ouse",
      category: "Development",
      price: "15.00",
      oldPrice: "45.00",
      color: "blue-2"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
