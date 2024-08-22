import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PhotoFilter'
})
export class PhotoFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, type:string): any[] {
    if (!items) return [];
    if (!searchText) return items;
  
    if (type=='country') {
      return items.filter(item => {
        return Object.keys(item).some(key => {
          if (key == "country" ) 
            return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
          else 
            return;
        });
      });
    } else {
      return items.filter(item => {
        return Object.keys(item).some(key => {
          if (key == "country" || key == "description") 
            return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
          else 
            return;
        });
      });
    }

    
   }
}
