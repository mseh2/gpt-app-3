import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { MainChatService } from './main-chat.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss'],
})
export class MainChatComponent implements OnInit {
  /** 入力値 */
  message: string = '';
  test: string = '';
  /** 回答 */
  gptAnser: any = '';
  /** エラー内容 */
  error: string = '';
  constructor(
    private mainChatService: MainChatService,
    // private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  /**
   * 送信ボタン押下
   */
  submitMsg() {
    // スピナー表示
    // this.spinner.show(undefined, {
    //   type: 'ball-pulse-sync',
    //   fullScreen: false,
    // });

    // this.mainChatService
    //   .getCompletions(this.message)
    //   .then((data) => {
    //     this.gptAnser = data[0];
    //     // スピナー表示終了
    //     this.spinner.hide();
    //   })
    //   .catch((error) => {
    //     // スピナー表示終了
    //     this.spinner.hide();
    //     // エラー処理
    //     handleError(error);
    //   });
  }
}
