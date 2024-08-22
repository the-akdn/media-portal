import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

/*
{
  populate: {
    pdfFile: {
      populate:{
        pdfFile: {
          populate: true,
        }
      }
    },
    photographs : {
      populate:{
        photo: {
          populate: true,
          field: ["url"]
        },
        jpgFormat: {
          populate: true,
          field: ["url"]
        },
        pngormat: {
          populate: true,
          field: ["url"]
        },
        zipFormat: {
          populate: true,
          field: ["url"]
        }
      }
    },
    broll: {
      populate:{
        video720p: {
          populate: true,
        }
      }
    }
  }
}
*/

@Injectable({
  providedIn: 'root'
})
export class MediaKitsService extends DataService {
 
  constructor(http: HttpClient) {
    super(http);
  }

  public getMediaKits()  {
    return this.http.get< any >(this.url+"regional-media-kits?"+
      "populate[country][populate]=true&"+
      "populate[pdfFile][populate][pdfFile][populate]=true&"+
      "populate[photographs][populate][photo][populate]=true&"+
      "populate[photographs][populate][jpgFormat][populate]=true&"+
      "populate[photographs][populate][pngormat][populate]=true&"+
      "populate[photographs][populate][zipFormat][populate]=true&"+
      "populate[broll][populate][video720p][populate]=true"+
      "populate[broll][populate][video1080p][populate]=true"+
      "populate[broll][populate][videoZip][populate]=true"+
      "&sort[1]=title"
    );
  }

}
