import { ReflectiveInjector } from '@angular/core';
import { TestBed, tick, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, ConnectionBackend, BaseRequestOptions, RequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendWithDataProvider } from './fakeBackendWithData';
import { fakeBackendWithNoDataProvider } from './fakeBackendWithNoData';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Rx';

describe('AppComponent (data found)', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [
        fakeBackendWithDataProvider,
        MockBackend,
        BaseRequestOptions        
      ]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the first trail found', async(() => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();
    setTimeout(() => {
      expect(compiled.querySelector('#name').textContent).toContain('Boat Rock');
      expect(compiled.querySelector('#state').textContent).toContain('Georgia');
      expect(compiled.querySelector('#directions').textContent).toContain('Interstate 20 and Fulton Industrial Boulevard');
      expect(compiled.querySelector('#activities').children.length).toBe(1);
    }, 2000);
  }));

});

describe('AppComponent (no data found)', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [
        fakeBackendWithNoDataProvider,
        MockBackend,
        BaseRequestOptions        
      ]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render an error message', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();
    fixture.detectChanges();
    setTimeout(() => {
      expect(compiled.querySelector('#notFound').textContent).toContain('We could not find a trail here');
    }, 2000);
  }));

});
