import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li *ngFor="let post of _posts">
    {{post.title}}&nbsp;&nbsp;<button (click)="showPost(post.id)">Show</button>
  </li>
  </ul>
  <div #modal id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" (click)="closeModal()">&times;</span>
      <h3>{{this._post.title}}</h3>
      <p>{{this._post.body}}</p>
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  _posts = [];
  _post = {};
  @ViewChild('modal') _myModal: any;

  constructor(private _http: Http) {
  }

  ngOnInit() {
    return this._http.get("http://jsonplaceholder.typicode.com/posts").subscribe(
      res => {
        this._posts = res.json();
      }
    );
  }

  showPost(postId: number) {
    this._http.get(`http://jsonplaceholder.typicode.com/posts/${postId}`).subscribe(
      res => {
        this._post = res.json();
        this._myModal.nativeElement.style.display = 'block';
      }
    )
  }

  closeModal() {
    this._myModal.nativeElement.style.display = 'none';
  }

}
