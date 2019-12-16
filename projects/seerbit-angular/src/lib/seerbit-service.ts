import { Injectable } from '@angular/core';
import { SeerBitOptions } from './models/SeerBitOptions';

interface MyWindow extends Window {
  SeerBitPop: { setup(options: Partial<SeerBitOptions>): { openIframe(): any } };
}
declare var SeerbitPay;
declare var window: MyWindow;

@Injectable({
  providedIn: 'root'
})
export class SeerbitService {
  constructor() { }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      if (window.SeerBitPop && typeof window.SeerBitPop.setup === 'function') {
        resolve();
        return;
      }
      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'http://checkout-sbt.surge.sh/api/v1/seerbit.js');
      setTimeout(() => {
        SeerbitPay;
      }, 3000);
    });
  }
  getSeerBitOptions(obj: SeerBitOptions): SeerBitOptions {
    //const seerBitOptions: any = {};
    const seerBitOptions: SeerBitOptions = {
      amount: obj.amount,
      tranref: obj.tranref,
      public_key: obj.public_key,
      currency: obj.currency || 'NGN',
      callbackurl: obj.callbackurl || '',
      country: obj.country,
      description: obj.description
    };
    return seerBitOptions;
  }
  checkInput(obj: Partial<SeerBitOptions>): string {
    if (!obj.public_key) {
      return 'Seerbit: Please insert a your public key';
    }
    if (!obj.amount) {
      return 'Seerbit: Transaction amount cannot be empty';
    }
    if (!obj.tranref) {
      return 'Seerbit: Transaction ref cannot be empty';
    }
    return '';
  }
}
