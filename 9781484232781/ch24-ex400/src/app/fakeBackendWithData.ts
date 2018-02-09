import { Http, BaseRequestOptions, Response, ResponseOptions, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendWithDataFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {
      const MOCKDATA =
        {
          "places": [
            {
              "city": "Atlanta",
              "state": "Georgia",
              "country": "United States",
              "name": "Boat Rock",
              "parent_id": null,
              "unique_id": 5370,
              "directions": "From the intersection of Interstate 20 and Fulton Industrial Boulevard go south for 3.8 miles, turn left onto Bakers Ferry Road SW, go 0.5 miles, turn left on Boat Rock Road SW, go 0.4 miles, look for small gravel driveway on the right, pull into small 6 car parking lot. There is a small kiosk at the edge of the lot with a rough map of the area and a trail leading up to the boulders. The lake area is located a few hundred yards to the southeast (see drtopo map).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;1220 Boat Rock Road Mapquest Link ",
              "lat": 0.0,
              "lon": 0.0,
              "description": null,
              "date_created": null,
              "children": [
              ],
              "activities": [
                {
                  "name": "Boat Rock",
                  "unique_id": "2-1012",
                  "place_id": 5370,
                  "activity_type_id": 2,
                  "activity_type_name": "hiking",
                  "url": "http://www.tripleblaze.com/trail.php?c=3&i=1012",
                  "attribs": {
                    "\"length\"": "\"1\""
                  },
                  "description": "For those of us who like hiking AND rock climbing! Very cool place just inside of Atlanta. We took our children here and they could climb some of the boulders. A great experience for families and it's fun getting to watch the expert climbers on the rocks!",
                  "length": 1.0,
                  "activity_type": {
                    "created_at": "2012-08-15T16:12:21Z",
                    "id": 2,
                    "name": "hiking",
                    "updated_at": "2012-08-15T16:12:21Z"
                  },
                  "thumbnail": "http://images.tripleblaze.com/2009/07/Myspace-Pictures-130-0.jpg",
                  "rank": null,
                  "rating": 0.0
                }
              ]
            }
          ]
        };
      
      connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: MOCKDATA })));

    }, 500);

  });

  return new Http(backend, options);
};

export let fakeBackendWithDataProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendWithDataFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};