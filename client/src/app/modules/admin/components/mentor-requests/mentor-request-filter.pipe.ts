import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mentorRequestFilter',
})
export class MentorRequestFilterPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    return value.filter(function (item: any) {
      return item.toLowerCase().includes(args);
    });
  }
}
