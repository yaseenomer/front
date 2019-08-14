import { Component } from '@angular/core';
// import { jsonfile } from '@jsonfile';
import db from  '../assets/json/database.json';
import {TranslatePipe} from  '../app/pips/translate.pipe';
import {AuthService} from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sarh-website';
  public transform = TranslatePipe;
 public local: string = this.getlocalLang();

 newWords = [];

  constructor(private auth: AuthService) { }



  ngOnInit() {

   // console.log(localStorage.getItem("bdrLng"));
   // this.localLang();
    // jsonfile.readFile(file, function (err, obj) {
    //   if (err) console.error(err)
    //   console.dir(obj)
    // })
    // this.httpService.get('./assets/birds.json').subscribe(
    //   data => {
    //     this.db = data as string [];	 // FILL THE ARRAY WITH DATA.
    //     //  console.log(this.arrBirds[1]);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );
    // console.log(myJSON);
    this.ifExistInArray(db, 'Login');
    this.ifExistInArray(this.newWords, 'Login');

  }

  getlocalLang() {
    if (localStorage.getItem('bdrLng') != null) {
      return localStorage.getItem('bdrLng');
    } else {
      localStorage.setItem('bdrLng', 'en');
      return 'en';
    }
  }

  setlocalLang(local) {
   localStorage.setItem('bdrLng', local);
   window.location.reload();
  }

  findInNewWords(key) {
   let isex = false;
   this.newWords.find((word) => {
            if (word == key) {
              isex = true;
              return true;
            }
          });
    //    console.log("word : "+ key )
   return isex;
     // }
  }



  trans(keyWord) {
   let result = keyWord;
   db.find((words) => {
        if (words.key === keyWord) {
           words.langs.find((word) => {
            if (word.lang === this.local) {
              result = word.word;
             }
         });
        }

    });
   if (  this.ifExistInArray(db, keyWord) == false &&  this.ifExistInArray(this.newWords, keyWord) == false) {

          this.newWords.push({key: result, langs: [{lang: 'ar', word: ''}]});
        }
   return result;
  }

  ngAfterViewInit() {
      console.log( JSON.stringify( this.newWords));

  }

  ifExistInArray(array, key) {
  //  console.log(array.some(el => el.key === key))
    return  array.some(el => el.key === key);
   }
   logout() {
      this.auth.logout();
   }


}
