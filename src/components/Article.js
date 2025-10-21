import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}) {
  const getReadingTimeEmojis = (mins) => {
    if (!mins) return '';
    
    if (mins < 30) {
      const cups = Math.ceil(mins / 5);
      return '☕️'.repeat(cups);
    } else {
      const bentos = Math.ceil(mins / 10);
      return '🍱'.repeat(bentos);
    }
  };

  const emojis = getReadingTimeEmojis(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {minutes && ` • ${emojis} ${minutes} min read`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;