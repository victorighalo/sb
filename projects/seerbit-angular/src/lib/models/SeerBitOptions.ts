import { EventEmitter } from '@angular/core';

export interface SeerBitOptions {
  /**
   * Amount to withdraw (in kobo for NGN)
   */
  amount: string;
  /**
   * A flat fee to charge the subaccount for this transaction, in kobo.
   */
  tranref: number;
  
  public_key: string;
  /**
   * The customer's email address
   */
  currency: string;
  /**
   * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
   */
  callbackurl?: string;
  /**
   * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
   */
  country?: string;
  /**
   * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
   */
  description?: string;
  /**
   * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
   */
}

export interface PrivateSeerBitOptions extends SeerBitOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   * @param response?: The server response
   */
  callback: (response?: any) => void;
  /**
   * A function to be called when the pay modal is closed.
   */
  close: (response?: any) => void;
}

export interface PrivateSeerBitOptionsWithEmitters extends SeerBitOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   */
  callback: EventEmitter<any>;
  /**
   * A function to be called when the pay modal is closed.
   */
  close: EventEmitter<void>;
}
