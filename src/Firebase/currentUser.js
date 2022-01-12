import { auth } from "./Firebase-config.js";

export function authUser(){
return auth.currentUser
}