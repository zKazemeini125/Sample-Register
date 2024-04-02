import { Component, Input } from "@angular/core";
import { User } from "../interfaces/user-interface";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrl: "./users-table.component.css",
})
export class UsersTableComponent {
  @Input() usersTb: User[] = [];

  onSaveClick(user: User, index: number): void {
    this.usersTb[index].name = user.name;
    this.usersTb[index].cellNumber = user.cellNumber;
    this.usersTb[index].email = user.email;
    this.usersTb[index].isEdited = false;
  }
  onEditClick(user: User) {
    user.isEdited = true;
  }
  onCancleClick(user: User) {
    user.isEdited = !user.isEdited;
  }
}
