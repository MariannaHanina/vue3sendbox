import { ElNotification } from 'element-plus';
import { INotificationOptions, INotificationHandle } from 'element-plus/lib/el-notification/src/notification.type';

export default function DsnNotification (options: INotificationOptions): INotificationHandle {
  return ElNotification(options);
}
