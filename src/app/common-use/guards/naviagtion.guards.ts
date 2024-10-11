import { inject } from "@angular/core";
import { NavigationState } from "../states/navigation.state";


export const showNavLink = () =>{
   inject(NavigationState).showMe
}


export const hideNavLink = () =>{
   inject(NavigationState).hideMe
}

