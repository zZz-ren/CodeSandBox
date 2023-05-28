import { useState } from "react";

export default function Quoter() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Dream big and dare to fail. - Norman Vaughan",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict your future is to create it. - Peter Drucker",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The secret of success is to know something nobody else knows. - Aristotle Onassis",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only person you should try to be better than is the person you were yesterday. - Unknown",
    "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler"
  ];

  const rand = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[10]);

  // const myfunc = () =>{
  //   setQuote(quotes[Math.floor(Math.random()*quotes.length)])
  // }

  return (
    <div>
      <h4>this is from quoter</h4>
      <h3 style={{ color: "green" }}>
        <i>{quote}</i>
      </h3>
      <button
        onClick={() => {
          setQuote(quotes[rand]);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
