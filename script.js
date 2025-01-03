const quotes = {positive: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The best way to predict the future is to invent it. - Alan Kay"
    ],
    philosophical: [
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt"
    ]};
    
    // Generate a random quote and update the display
    document.getElementById("generateQuote").addEventListener("click", () => {
         const quoteDisplay = document.getElementById("quoteDisplay"); 
         quoteDisplay.classList.add("hidden"); setTimeout(() => {
             const category = Math.random() > 0.5 ? "positive" : "philosophical"; 
             const randomIndex = Math.floor(Math.random() * quotes[category].length); 
             const selectedQuote = quotes[category][randomIndex]; 
             
             // Update the quote and display it
             quoteDisplay.textContent = selectedQuote; 
             quoteDisplay.classList.remove("hidden"); 
             document.body.className = category;  

             // Update the Twitter share link
             const tweetButton = document.getElementById("tweetQuote"); 
             const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedQuote)}`; 
             tweetButton.setAttribute("href", tweetUrl); }, 500); }); 
             document.getElementById("tweetQuote").addEventListener("click", (e) => { e.preventDefault(); 
             const tweetButton = e.target; const tweetUrl = tweetButton.getAttribute("href"); 
             if (tweetUrl) { window.open(tweetUrl, "_blank"); } 
             else { alert("No quote available to tweet!"); } });
    

    const copyButton = document.getElementById("copyQuote");
    copyButton.addEventListener("click", () => {
    const quoteText = document.getElementById("quoteDisplay").textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    });
    });