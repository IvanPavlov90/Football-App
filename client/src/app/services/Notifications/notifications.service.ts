import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationModel } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  private notifications: Subject<NotificationModel> = new Subject<NotificationModel>();

  getNotifications(): Subject<NotificationModel> {
		return this.notifications;
	}

  showNotification(message: string, type: string) {
		this.notifications.next(new NotificationModel(message, type));
	}
}
