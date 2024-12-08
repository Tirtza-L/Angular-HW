import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  template: "<h1>hello my-app</h1>",
  selector: "app-root"
})

export class AppComponent {
  x: number = 5;

  title: string = "hello!! this is startapp"

  calc(){
    return 0;
  }

  constructor()
  {

  }
}



// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'start';
// }
