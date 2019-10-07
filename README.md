# Ionic_4_ChatOnline
Chat Online

# Guards

```
ionic g guard guards/auth --spec=false
ionic g guard guards/nologin --spec=false
```

```
export class AuthGuard implements CanActivate {

  constructor(
    private AFauth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.AFauth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        //this.router.navigate(['/tabs']);
        console.log('user No autenticated');
        return false;
      } else {
        console.log('user autenticated');
        //console.log(auth);
        return true;
      }
    }));

  }
```
```
{ path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
```
