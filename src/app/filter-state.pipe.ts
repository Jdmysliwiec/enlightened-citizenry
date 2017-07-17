import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterState'
})
export class FilterStatePipe implements PipeTransform {

  transform(value: any, filterBy: string): any {
    var result = [];
    value.forEach(function(legislator) {
      if (legislator.state.toLowerCase() === filterBy.toLowerCase()) {
        result.push(legislator);
      }
    });
    return result;
  }

}
