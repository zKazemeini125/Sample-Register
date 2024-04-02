import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  images = [
    "./assets/bud.jpg",
    "./assets/leaf.jpg",
    "./assets/spring.jpg",
    "./assets/workout.png",
    "/assets/yellow.jpg",
  ];
}
