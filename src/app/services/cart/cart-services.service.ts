// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// // import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'http://localhost:5000/api/cart'; // Replace with your CartService API URL

//   // constructor(private http: HttpClient, private authService: AuthService) {}

//   getCartItems(): Observable<any> {
//     // const token = this.authService.getToken();
//     return this.http.get(`${this.apiUrl}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }

//   addToCart(item: any): Observable<any> {
//     const token = this.authService.getToken();
//     return this.http.post(`${this.apiUrl}/add`, item, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }

//   removeFromCart(cartItemId: number): Observable<any> {
//     const token = this.authService.getToken();
//     return this.http.post(`${this.apiUrl}/remove`, { cartItemId }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }

//   clearCart(): Observable<any> {
//     const token = this.authService.getToken();
//     return this.http.post(`${this.apiUrl}/clear`, {}, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }
// }

