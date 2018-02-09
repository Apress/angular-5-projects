import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Service } from './service';
import { Observable } from 'rxjs/Rx';

describe('AppComponent (data found)', () => {

  beforeEach(async(() => {

    const MOCKDATA = 
    {  
      "places":[  
          {  
            "city":"Atlanta",
            "state":"Georgia",
            "country":"United States",
            "name":"Boat Rock",
            "parent_id":null,
            "unique_id":5370,
            "directions":"From the intersection of Interstate 20 and Fulton Industrial Boulevard go south for 3.8 miles, turn left onto Bakers Ferry Road SW, go 0.5 miles, turn left on Boat Rock Road SW, go 0.4 miles, look for small gravel driveway on the right, pull into small 6 car parking lot. There is a small kiosk at the edge of the lot with a rough map of the area and a trail leading up to the boulders. The lake area is located a few hundred yards to the southeast (see drtopo map).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;1220 Boat Rock Road Mapquest Link ",
            "lat":0.0,
            "lon":0.0,
            "description":null,
            "date_created":null,
            "children":[  
            ],
            "activities":[  
                {  
                  "name":"Boat Rock",
                  "unique_id":"2-1012",
                  "place_id":5370,
                  "activity_type_id":2,
                  "activity_type_name":"hiking",
                  "url":"http://www.tripleblaze.com/trail.php?c=3&i=1012",
                  "attribs":{  
                      "\"length\"":"\"1\""
                  },
                  "description":"For those of us who like hiking AND rock climbing! Very cool place just inside of Atlanta. We took our children here and they could climb some of the boulders. A great experience for families and it's fun getting to watch the expert climbers on the rocks!",
                  "length":1.0,
                  "activity_type":{  
                      "created_at":"2012-08-15T16:12:21Z",
                      "id":2,
                      "name":"hiking",
                      "updated_at":"2012-08-15T16:12:21Z"
                  },
                  "thumbnail":"http://images.tripleblaze.com/2009/07/Myspace-Pictures-130-0.jpg",
                  "rank":null,
                  "rating":0.0
                }
            ]
          }
      ]
    };

    const mockResponse = {
      json() {
        return MOCKDATA;        
      }
    }

    const mockService = {
      search(search) {
        return Observable.of(mockResponse);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [{provide: Service, useValue: mockService } ]
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
    fixture.detectChanges();
    expect(compiled.querySelector('#name').textContent).toContain('Boat Rock');
    expect(compiled.querySelector('#state').textContent).toContain('Georgia');
    expect(compiled.querySelector('#directions').textContent).toContain('Interstate 20 and Fulton Industrial Boulevard');
    expect(compiled.querySelector('#activities').children.length).toBe(1);
  }));

});

describe('AppComponent (no data found)', () => {

  beforeEach(async(() => {

    const mockNoResponse = {
      json() {
        return undefined;        
      }      
    }

    const mockService = {
      search(search) {
        return Observable.of(mockNoResponse);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [{provide: Service, useValue: mockService } ]
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
    expect(compiled.querySelector('#notFound').textContent).toContain('We could not find a trail here');
  }));

});
