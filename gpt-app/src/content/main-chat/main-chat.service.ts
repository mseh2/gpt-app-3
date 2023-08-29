import { Injectable, Type } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import OpenAI from 'openai';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class MainChatService {

  /** APIキー */
  private gptApiKey = 'キーを入れる';
  /** HTTPリクエストヘッダー */
  private httpOptions = {
    headers: new HttpHeaders({
    }),
  };
  /** OpenAiのAPIキーを設定 */
  // private configuration = new Configuration({
  // apiKey: this.gptApiKey,
  // });

  /** OpenAi */
  private openai = new OpenAI({apiKey:this.gptApiKey});
  constructor(
  private http: HttpClient,
  ) { }
  // TODO バックエンド化
  /**
   * gpt3.5を呼び出し
   * @param content
   */
  async gptApiRequest(content: string) {
    const chatCompletion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `${content}` }],
    });
    return chatCompletion;
  }
  /**
   * HTTPエラーの場合
   * 公式ドキュメント：https://angular.io/guide/http
   * @param error
   * @returns
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // クライアント側またはネットワークのエラーが発生しました。適切に処理してください。
      console.error('エラーが発生しました:', error.error);
    } else {
      // バックエンドが成功しないレスポンスコードを返しました。
      // レスポンスボディには何が間違っているかのヒントが含まれる場合があります。
      console.error(
        `バックエンドからのコード ${error.status} が返されました。ボディは次のようになります: `,
        error.error
      );
    }
    // ユーザーに表示されるエラーメッセージを含む Observable を返します。
    return throwError(() => new Error('問題が発生しました。'));
  }
}
