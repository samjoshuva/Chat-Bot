import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import RiveScript from 'rivescript';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  output: any;

  bot = new RiveScript();

  input: any;

  constructor(public navCtrl: NavController) {
    this.bot.loadFile(
      'assets/brain.rive',
      () => {
        // Now the replies must be sorted!
        this.bot.sortReplies();

        // And now we're free to get a reply from the brain!
      },
      error => {
        console.log('Error when loading files: ' + error);
      }
    );
  }

  chatAsync() {
    let reply;
    console.log(this.input);
    reply = this.bot.reply('local-user', this.input);
    reply.then(val => {
      this.output = val;
      this.input = '';
    });
    console.log(reply);
  }
}
