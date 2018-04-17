import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable()
export class LegalServices
{
  

    constructor(private http:Http)
    {

    }

    public sendTC(userEmail:String)
    {
       /* this.http.get('url')
        .subscribe(data => {

            let response = JSON.stringify(data);
            if(response == "RETURN_SUCCESS")
            {
                return true;
            }
            else
            return false;
        });*/
        return true;
    }

    public sendPrivacyPolicy(userEmail:String)
    {
       /* this.http.get('url')
        .subscribe(data => {

            let response = JSON.stringify(data);
            if(response == "RETURN_SUCCESS")
            {
                return true;
            }
            else
            return false;
        });*/
        return true;
    }
}