import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';


        export const return_status ="RETURN_STATUS";    
        export const return_success ="RETURN_SUCCESS";    
        export const return_failure ="RETURN_FAILURE";    
        export const return_error ="RETURN_ERROR";    

        export const topic_login ="TOPIC_LOGIN";    
        export const topic_get_available_universities ="TOPIC_GET_AVAILABLE_UNIVERSITIES";    
        export const topic_get_available_colleges ="TOPIC_GET_AVAILABLE_COLLEGES";      
        export const topic_get_available_majors ="TOPIC_GET_AVAILABLE_MAJORS";       
    
        export const error_email ="Please enter valid E-mail.";    
        export const error_phone_number ="Please enter valid Phone number.";    
        export const error_name ="Please enter a valid name.";    
        export const error_password ="Please enter a stronger password with atleast one uppercase, one number and one special character.";    
        export const error_confirm_password ="Confirm password does not match the entered password.";    
    