import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Country } from '../share/country-data';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CountryState } from './state/country.state';
import { Router, RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  Subject,
  debounceTime,
  filter,
  takeUntil,
  tap,
} from 'rxjs';

import { NAVIGATION_CONFIG, NavigationConfigLink } from './navigation.config';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../app/login/login.component';
import { UserState } from './state/user-state';
import RegisterPageComponent from '../app/common-use/register-page/register-page.component';
import { ToyType, ToyTypes } from './state/toy-type.state';
import { ToyBrowseState } from '../app/toy-browse/state/toy-browse.state';

import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { ToyModel } from '../app/toy-browse/state/toy-browse-model';
const fb = new FormBuilder();

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatBadgeModule,

  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  private navigationConfig = new BehaviorSubject<NavigationConfigLink[]>(
    NAVIGATION_CONFIG
  );

  toysInfo = this.allToysDataState.toysInfo();//;.map((x)=>x);
  originalToysInfo = this.allToysDataState.toysInfo().map((x) => x);

  public unsubscribe$ = new Subject();
  //validUser$ = this.userState.validUser$;
  userStatus = this.userState.userStateSignal();
  navigationConfig$ = this.navigationConfig.asObservable();
  toyTypes: ToyType[] = [];
  countryList: Country[] = [];
  filteredToy: ToyModel[]=[];

  
  searchForm = fb.group({
    query: (''),
    toy_name: '',
    toy_country: fb.control<string[]>([]),
    age_type: fb.control<string[]>([]),
  });

  constructor(
    private countryState: CountryState,
    private router: Router,
    private dialog: MatDialog,
    public userState: UserState,
    private allToysDataState: ToyBrowseState
  ) {

  }

  ngOnInit() 
  {
    this.countryList = this.countryState.allCountries().map((x) => x);
    this.toyTypes = ToyTypes.map((x) => x);
  }

  private searchFormChanges = this.searchForm.valueChanges.subscribe((value)=>{

    if(value.query){    
    this.allToysDataState.toysInfo.set(
      this.toysInfo.filter(x=>x.detailsOfToy.toLowerCase()
      .includes(`${value.query?.toLowerCase()}`) || x.toyName.toLowerCase().includes(`${value.query?.toLowerCase()}`))
      )

    }else if(value.toy_country?.length){
      const toys = this.toysInfo.filter(x=> `${value.toy_country}`.includes(x.toyCountry))
      this.allToysDataState.toysInfo.set(toys)

    }else if(value.toy_name){
      this.allToysDataState.toysInfo.set(
        this.toysInfo.filter(x=>x.toyName.toLowerCase().includes(`${value.toy_name?.toLowerCase()}`))
      )
    }
    else if(value.age_type?.length){

      const ageType=this.toysInfo.filter(x=>`${value.age_type}`.includes(x.ageType))
    this.allToysDataState.toysInfo.set(ageType)
    }
    else{
      this.allToysDataState.toysInfo.set(this.originalToysInfo)
    }

    
})

  clearCountry(){
    this.searchForm.controls.toy_country.patchValue([])
  }
  clearAge(){
    this.searchForm.controls.age_type.patchValue([])
  }


  loadHomePage() {
    this.router.navigateByUrl('/');
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: 'auto',
      width: 'auto',
      autoFocus: false,
      disableClose: true,
      position: {
        top: '10vh',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response === 'success') {
          setTimeout(()=>{
            //localStorage.setItem('authToken', response)
            sessionStorage.setItem('authToken', response)
        })
          
          console.log('ok: ', this.userState.userStateSignal(),this.userState.fetchUserRole());
        }
      });
  }

  loadRegisterPage() {
    let registerDialogRef = this.dialog.open(RegisterPageComponent, {
      height: 'auto',
      width: 'auto',
      autoFocus: false,
      disableClose: false,
      position: {
        top: '10vh',
      },
      
    });
  }

  logout() {
    this.userState.userStateSignal.set(null);
   // localStorage.removeItem('authToken')
    sessionStorage.removeItem('authToken')
    this.router.navigate(['/'])
  }
}
