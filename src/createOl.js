function createOlFinal(tweets) {
    const olFinal = document.createElement('ol');
    tweets.map(tweet => {
      let li = document.createElement('li');
      li.innerText = tweet.full_text;
      olFinal.append(li);
    });
    return olFinal;
}