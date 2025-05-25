import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    declarations: [AppComponent, TaskListComponent],
    imports: [BrowserModule, CommonModule],
    bootstrap: [AppComponent],
})
export class AppModule {}