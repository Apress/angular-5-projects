import { Http, BaseRequestOptions, Response, ResponseOptions, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendWithNoDataFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {
      const MOCKDATA = { "places": []};
      
      connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: MOCKDATA })));

    }, 500);

  });

  return new Http(backend, options);
};

export let fakeBackendWithNoDataProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendWithNoDataFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};