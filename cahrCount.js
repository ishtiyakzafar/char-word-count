const countFun = () => {
  const Count = document.getElementById("words").value;
  charCount.innerHTML = Count.length;
  const wordCount = Count.split(" ");
  wordcount.innerHTML = wordCount.length;
  if (Count.length === 0) {
    wordcount.innerHTML = 0;
  }
};
