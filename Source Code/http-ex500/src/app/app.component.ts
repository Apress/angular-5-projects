import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let post of _posts">
        <b>{{post.title}}:</b> {{post.body}}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  _posts: Array<Post>;
  constructor(private _http: HttpClient) {}
  ngOnInit() {
    return this._http.get<Array<Post>>("http://jsonplaceholder.typicode.com/posts")
      .map(
        response => { 
          const postsArray: Array<Post> = new Array<Post>();
          for (const responseItem of response){
            const post = 
              new Post(responseItem['title'], responseItem['body']);
            postsArray.push(post);
          }
          return postsArray;
        }
      )
      .subscribe(
        response => {
          this._posts = response;
        }
    );
  }
}
