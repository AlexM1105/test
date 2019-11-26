import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../../../environments/environment';


@Pipe({name: 'imageFullSrc'})
export class ImageFullSrcPipe implements PipeTransform {
  transform(src: any): any {
    return environment.staticUrl + src;
  }
}
