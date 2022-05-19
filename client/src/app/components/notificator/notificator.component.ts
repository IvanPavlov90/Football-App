import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/services/Notifications/notification.model';
import { NotificationsService } from 'src/app/services/Notifications/notifications.service';

@Component({
  selector: 'notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.scss']
})
export class NotificatorComponent implements OnInit {

  constructor(private _notificationService: NotificationsService) { 
    this._notificationService.getNotifications().subscribe(
      (notification: NotificationModel) => {
        this.notifications.add(notification);
        setTimeout(()=> {
          this.closeNotifications(notification);
        }, 3000);
      }
    )
  }

  notifications: Set<NotificationModel> = new Set();

  closeNotifications(notification: NotificationModel) {
    this.notifications.delete(notification);
  }

  ngOnInit(): void {
  }

}
