import Notification from './notification';
import './index.css';

let notificationInstance;

function getNotificationInstance() {
  return notificationInstance || Notification.reWrite();
}

const notice = (type, content, duration, onClose, mask) => {

  notificationInstance = getNotificationInstance();

  notificationInstance.notice({
    type,
    content,
    duration,
    onClose,
    mask,
  });
}

export default {
  show: (content, duration, onClose, mask) => notice(undefined, content, duration, onClose, mask),

  success: (content, duration, onClose, mask) => notice('success', content, duration, onClose, mask),

  hide: () => {
    if (notificationInstance) {
      notificationInstance.destroy();
      notificationInstance = null;
    }
  }
}