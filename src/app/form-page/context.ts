import {Injectable, InjectionToken} from '@angular/core';

export const PATH = new InjectionToken<string>('');

@Injectable({providedIn: 'root'})
export class Context {
  parent = '';
  value = {
    first: 'foo',
    subForm: {
      foo: '123'
    }
  };
}
