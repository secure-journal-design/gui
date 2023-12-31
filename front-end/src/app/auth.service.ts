import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertService } from './alert.service';
import { Author } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = 'http://localhost:8000/api/v1';

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService
  ) {}

  private logging = new BehaviorSubject<boolean>(false);
  logged = this.logging.asObservable();

  setData(logged: boolean) {
    if (logged) {
      //this.localService.saveData("auth","1")
      localStorage.setItem('auth', '1');
      this.logging.next(true);
    } else {
      //this.localService.removeData("auth");
      localStorage.removeItem('auth');
      this.logging.next(false);
    }
  }

  login(form: any) {
    return this.http.post(this.apiUrl + '/auth/login', form, {
      withCredentials: true,
      observe: 'response',
      responseType: 'text',
    });
  }

  logout() {
    this.http
      .post(this.apiUrl + '/logout', null, { withCredentials: true })
      .subscribe({
        next: (response) => {
          this.setData(false);
          this.router.navigate(['/home-page']);
          this.alert.showSuccessAlert('Successfully logged out', 'Close', 3000);
        },
        error: (e) => {
          //this.alert.showErrorAlert("An unexpected error occurred. If the problem persists please contact us.","Close",5000)
        },
      });
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/refreshToken', null, {
      withCredentials: true,
    });
  }

  checkLogged() {
    //return this.localService.getData("auth") /*localStorage.getItem("auth")*/ == "1";
    return localStorage.getItem('auth') && localStorage.getItem('auth') == '1';
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/author', {
      withCredentials: true,
    });
  }

  updateUser(data: any): Observable<Author> {
    return this.http.patch<any>(this.apiUrl + '/author', data, {
      withCredentials: true,
    });
  }

}
