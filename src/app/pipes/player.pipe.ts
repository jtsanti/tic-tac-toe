import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'player'
})
export class PlayerPipe implements PipeTransform {

  transform(value: string): string {
    return value === 'X' ? 'One' : 'Two';
  }

}
