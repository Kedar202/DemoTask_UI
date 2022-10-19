import { Injectable } from '@angular/core';

import { adminCredential, normalCredential } from "../utils/constant";

interface loginBody {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor() { }

  checkLoginUser(body: loginBody) {
    if(body.email === normalCredential.email && body.password === normalCredential.password) {
      localStorage.setItem("user", "normal");
      return true;
    } else if(body.email === adminCredential.email && body.password === adminCredential.password) {
      localStorage.setItem("user", "admin");
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }
}
