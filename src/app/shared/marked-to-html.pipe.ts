import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'markedToHtml',
})
export class MarkedToHtmlPipe implements PipeTransform {

  transform(markedContent: string)  {
    return marked.parse(markedContent);
  }

}
