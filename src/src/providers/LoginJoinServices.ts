import {Injectable} from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { httpFactory } from '@angular/http/src/http_module';
import { Headers } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginWithEmailPage } from '../pages/login-with-email/login-with-email';
import { AcademicInformationPage } from '../pages/academic-information/academic-information';

@Injectable()
export class LoginJoinServices
{
    availableUniversities:  string[] = ['Texas','uh','ut'];
    availableColleges:  string[] = ['texsa','uh','ut'];
    availableMajors:  string[] = ['texsa','uh','ut'];

    headers: any;
    domainUrl: string;
    folderPath: string;
    fileName: string;
    universitySearchWebService:string;
    collegeSearchWebService:string;
    majorSearchWebService:string;

    constructor(private http: Http)
    {
        this.headers = new Headers({ 'Content-Type': 'application/json' });        
        this.headers.append('Access-Control-Allow-Origin' , '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.headers.append('Accept','application/json');
        this.headers.append('content-type','application/json');
        this.domainUrl = "http://adroitinclusive.com/";//"http://www.nxed.io/";
        this.folderPath = "auxi/";//"Webservices/LRS_WebServices/";
        this.universitySearchWebService = "UniversitySearchWebService.php";
        this.collegeSearchWebService = "CollegeSearchWebService.php";
        this.majorSearchWebService = "MajorSearchWebService.php";
    }

    checkLogin(userEmail:string, password:string, classObject:any, responseTopic: string)
    {
        let body = new FormData();
        body.append('username', userEmail);
        body.append('password', password);
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    
//nxed.io/Webservices/LRS_WebServices/loginWebServices.php
        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body)    
            .subscribe(data => {

                let response = JSON.stringify(data);
                console.log("data: "+JSON.stringify(data));
                response = JSON.parse(response);
            
                response =response["_body"];

                classObject.processHTTPResponse(responseTopic, response);             
              
                console.log("received "+response);
             });
        }
        catch(e)
        {
            classObject.processHTTPResponse(responseTopic, "RETURN_ERROR_0");     
        }       
    }

   public getAvailableUniversitiesList(classObject:any, responseTopic: string)  {      
/*
        try
        {
            this.http.get(this.domainUrl+this.folderPath+this.universitySearchWebService)    
            .subscribe(data => {
   
            let response =  JSON.stringify(data);  
            response = JSON.parse(response);     
            classObject.processHTTPResponse(responseTopic, JSON.parse(response["_body"].stringify()));
            });
        }
        catch(e)
        {
            classObject.processHTTPResponse(responseTopic, "RETURN_ERROR_0");     
        }   
*/
classObject.processHTTPResponse(responseTopic, this.availableUniversities);
        //return this.availableUniversities;
    }

    getUniversityCollegesList(selectedUinversity:string, classObject:any, responseTopic: string)
    {/*
       let body = new FormData();
        body.append('selectedUinversity', selectedUinversity); 
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post(this.domainUrl+this.folderPath+this.collegeSearchWebService, body,options)    
            .subscribe(data => {

                let response =  JSON.stringify(data);  
                response = JSON.parse(response);     
                classObject.processHTTPResponse(responseTopic, JSON.parse(response["_body"].stringify()));
                });          
        }
        catch(e)
        {
            classObject.processHTTPResponse(responseTopic, "RETURN_ERROR_0");     
        } */   
        classObject.processHTTPResponse(responseTopic, this.availableColleges);
       // return this.availableColleges;

    }

    getCollegeMajorsList(selectedUinversity:string, selectedCollege:string, classObject:any, responseTopic: string)
    {       /*
        let body = new FormData();
        body.append('selectedUinversity', selectedUinversity); 
        body.append('selectedCollege', selectedCollege); 
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post(this.domainUrl+this.folderPath+this.majorSearchWebService, body,options)    
            .subscribe(data => {

                let response =  JSON.stringify(data);  
                response = JSON.parse(response);     
                classObject.processHTTPResponse(responseTopic, JSON.parse(response["_body"].stringify()));  
            });
        }
        catch(e)
        {
            classObject.processHTTPResponse(responseTopic, "RETURN_ERROR_0");     
        }    
*/
classObject.processHTTPResponse(responseTopic, this.availableMajors);
       // return this.availableMajors;
    }

    getCollegeDepartmentsList(selectedUinversity:string, selectedCollege:string)
    {
        let body = new FormData();
        body.append('selectedUinversity', selectedUinversity); 
        body.append('selectedCollege', selectedCollege); 
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body,options)    
            .subscribe(data => {

                let response =  data.json();        
                return response;     
            });
        }
        catch(e)
        {
            return "RETURN_ERROR_0";
        }   
    }

    getDepartmentCoursesList(selectedUinversity:string, selectedCollege:string, selectedDepartment:string)
    {

        let body = new FormData();
        body.append('selectedUinversity', selectedUinversity); 
        body.append('selectedCollege', selectedCollege); 
        body.append('selectedDepartment', selectedDepartment); 
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body,options)    
            .subscribe(data => {

                let response = data.json();       
                return response;     
            });
        }
        catch(e)
        {
            return "RETURN_ERROR_0";
        }   
    }

    
    insertAccountInformation(studentInformation: any[])
    {

        let body = new FormData();
        body.append('personal_information', studentInformation[0]); 
        body.append('academic_information', studentInformation[1]);     
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body,options)    
            .subscribe(data => {

                let response = JSON.stringify(data);       
                return response;     
            });
        }
        catch(e)
        {
            return "RETURN_ERROR_0";
        }   
    }

    
    createSendVerificationCode(uinversityEmail:string)
    {
        let body = new FormData();
        body.append('uinversity_email', uinversityEmail); 
        console.log(body);
        console.log(this.headers);          
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body,options)    
            .subscribe(data => {

                let response = JSON.stringify(data);       
                return response;     
            });
        }
        catch(e)
        {
            return "RETURN_ERROR_0";
        }   
    }

    
    checkVerificationCode(uinversityEmail:string, verificationCode:string)
    {

        let body = new FormData();
        body.append('uinversity_email', uinversityEmail); 
        body.append('verification_code', verificationCode); 
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body,options)    
            .subscribe(data => {

                let response = JSON.stringify(data);       
                return response;     
            });
        }
        catch(e)
        {
            return "RETURN_ERROR_0";
        }   
    }

    
    insertCourseWork(studentCourseWork: any[])
    {

        let body = new FormData();
        body.append('student_coursework',JSON.stringify(studentCourseWork)); 
        console.log(body);
        console.log(this.headers);     
     
        let options = new RequestOptions({ headers: this.headers });    

        try
        {
            this.http.post('http://adroitinclusive.com/auxi/loginWebServices.php', body,options)    
            .subscribe(data => {

                let response = JSON.stringify(data);       
                return response;     
            });
        }
        catch(e)
        {
            return "RETURN_ERROR_0";
        }   
    }
}