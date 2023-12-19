import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(creationDate: string): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - new Date(creationDate).getTime();

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (diffInMilliseconds < hour) {
      const minutes = Math.floor(diffInMilliseconds / minute);
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (diffInMilliseconds < day) {
      const hours = Math.floor(diffInMilliseconds / hour);
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (diffInMilliseconds < week) {
      const days = Math.floor(diffInMilliseconds / day);
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (diffInMilliseconds < month) {
      const months = Math.floor(diffInMilliseconds / month);
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else {
      const years = Math.floor(diffInMilliseconds / year);
      return `${years} year${years === 1 ? '' : 's'} ago`;
    }
  }
}
