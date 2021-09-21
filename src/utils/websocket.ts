import WebSocketAsPromised from 'websocket-as-promised';

const WS_BASE_URL = process.env.VUE_APP_WS_BASE_URL;

export default class WSClient {
  private _url: string;
  private _wsp: WebSocketAsPromised;

  constructor (url:string = WS_BASE_URL) {
    this._url = url;
    this._wsp = new WebSocketAsPromised(url);
  }

  public get url () : string {
    return this._url;
  }

  public async connect (): Promise<Event> {
    return this._wsp.open().catch(() => {
      throw new Error('Failed to connect to ' + this._url);
    });
  }

  public close (): Promise<CloseEvent> {
    return this._wsp.close();
  }

  // Просто посылает чтото на сервер, в дальнейшем похоже будет sendRequest использоваться
  public send (data: string): void {
    return this._wsp.send(data)
  }
}
