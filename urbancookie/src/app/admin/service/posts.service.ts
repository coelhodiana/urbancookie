import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/articles')
  }

  postPosts(post: Post): Observable<Post[]> {
    return this.http.post<Post[]>('http://localhost:8080/articles', post)
  }

  getByIdPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/articles/${id}`)
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:8080/articles/${id}`, this.token)

  }

  putPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`http://localhost:8080/articles`, post, this.token)
  }

}
