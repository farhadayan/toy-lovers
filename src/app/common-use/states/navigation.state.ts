import { BehaviorSubject } from "rxjs";

export class NavigationState {
    private hasNavigation = new BehaviorSubject<boolean>(false)

    hasNavigation$=this.hasNavigation.asObservable();

    hideMe(){
      this.hasNavigation.next(false);
    }

    showMe(){
        this.hasNavigation.next(true);
    }
}
