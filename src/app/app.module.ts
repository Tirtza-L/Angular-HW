import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent} from "./task-details/task-details.component"

@NgModule({
    declarations: [AppComponent, TaskListComponent, TaskDetailsComponent],
    imports: [BrowserModule, CommonModule],
    bootstrap: [AppComponent],
})
export class AppModule {}