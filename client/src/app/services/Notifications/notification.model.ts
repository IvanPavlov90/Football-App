export class NotificationModel {
  constructor (header: string, type: string) {
    this.header = header;
    this.type = type;
  }

  header: string;
  type: string;
}