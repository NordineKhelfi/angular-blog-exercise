import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.post.Likes++;
  }
  
  onUnlike(){
    this.post.Likes--;
  }

}
