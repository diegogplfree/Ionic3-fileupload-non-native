import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  	private apiUrl = 'http://localhost/file'; /*fake service, put your real service*/
  
	constructor(public http: HttpClient) {
		console.log('Hello RestProvider Provider');
	}

	addFile(file) {
	  return new Promise((resolve, reject) => {
	  	const uploadData = new FormData();
	    uploadData.append('myFile', file, file.name);

	    let httpOptions = {
	      headers: new HttpHeaders({        
	        'Access-Control-Allow-Origin': '*',
	        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'        
	      })
	    };

	    this.http.post(this.apiUrl+'/upload.php', uploadData, httpOptions)
	      .subscribe(res => {
	        resolve(res);
	      }, (err) => {
	        reject(err);
	      });
	    });	 
	}	
}
