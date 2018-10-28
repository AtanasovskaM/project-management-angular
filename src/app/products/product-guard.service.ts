import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';


@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        if(isNaN(id) || id<1){
            alert('Invalid product ID'); //in a real world project it needs to redirect to another error page
            //start new navigation to redirect to list page
            this._router.navigate(['/products']);
            //abort
            return false;
        };
        return true;
    }
}