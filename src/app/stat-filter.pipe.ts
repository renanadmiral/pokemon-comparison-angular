import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statFilter'
})
export class StatFilterPipe implements PipeTransform {

  transform(stats: any[], args: string[]): any {
    return stats.filter((stat) => args.includes(stat.stat.name));
  }

}
