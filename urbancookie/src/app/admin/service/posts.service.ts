import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

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

}


/* 
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos(): Observable<Produto[]>{

    return this.http.get<Produto[]>('http://localhost:9000/produtos', this.token)
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:9000/produtos/${id}`, this.token)
  }

  getByIdProdutos(id: number) : Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:9000/produtos/${id}`, this.token)
  }
  getByNameProduto(nome: string): Observable<Produto[]> { 
    return this.http.get<Produto[]>(`http://localhost:9000/produtos/nome/${nome}`, this.token)
  }

  postProduto(produto: Produto) : Observable<Produto[]> {
    return this.http.post<Produto[]>('http://localhost:9000/produtos', produto, this.token)
  }

  putProduto(produto: Produto) : Observable<Produto>{
    return this.http.put<Produto>('http://localhost:9000/produtos', produto ,this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:9000/produtos/${id}`, this.token)

  }
*/