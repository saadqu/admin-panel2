import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  
    private token: any;

    constructor() { 
        this.token = sessionStorage.getItem('token');
    }

    checkToken() {
        if(this.token) {
            return true;
        } else {
            return false;
        }
    }
  
  }