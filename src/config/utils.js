// to make url public for api
export const API_URL = 'https://127.0.0.1:8000/api/questions';

// for format date 
export function getTimeAgo(date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffSeconds = Math.round(diff / 1000);

  if (diffSeconds < 60) {
    return "less than a minute ago";
  } else if (diffSeconds < 3600) {
    const diffMinutes = Math.round(diffSeconds / 60);
    return `about ${diffMinutes} ${diffMinutes > 1 ? "minutes" : "minute"} ago`;
  } else if (diffSeconds < 86400) {
    const diffHours = Math.round(diffSeconds / 3600);
    return `about ${diffHours} ${diffHours > 1 ? "hours" : "hour"} ago`;
  } else {
    const options = { day: "numeric", month: "long" };
    return `on ${date.toLocaleString("en-US", options)}`;
  }
}


export function dateFormatMonth(dateFormat){
  const date = new Date(dateFormat);
  const formattedDate = date.toLocaleString('en-US', {
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });
  return formattedDate;
  }