"use strict"

const quotes_array = [
  "Peace begins with a smile. – Mother Teresa",
  "Happiness is not the absence of problems; it’s the ability to deal with them. – Steve Maraboli",
  "Keep your face always toward the sunshine, and shadows will fall behind you. – Walt Whitman",
  "When you find peace within yourself, you become the kind of person who can live at peace with others. – Peace Pilgrim",
  "Every day may not be good, but there’s something good in every day. – Alice Morse Earle",
  "Do not let the behavior of others destroy your inner peace. – Dalai Lama",
  "Positivity always wins. Always. – Gary Vaynerchuk",
  "You cannot find peace by avoiding life. – Virginia Woolf",
  "A calm mind brings inner strength and self-confidence, so that's very important for good health. – Dalai Lama",
  "The only way to find true happiness is to risk being completely cut open. – Chuck Palahniuk",
  "Believe you can, and you're halfway there. – Theodore Roosevelt",
  "Inner peace is the new success. – Anonymous",
  "No matter how hard the past, you can always begin again. – Buddha",
  "Choose to be optimistic, it feels better. – Dalai Lama",
  "The more tranquil a man becomes, the greater is his success, his influence, his power for good. – James Allen",
  "Positive anything is better than negative nothing. – Elbert Hubbard",
  "It is not the absence of conflict that creates peace, but the ability to cope with it. – Anonymous",
  "Let your smile change the world, but don’t let the world change your smile. – Anonymous",
  "Serenity is not freedom from the storm, but peace amid the storm. – Anonymous",
  "The best way to predict the future is to create it with a positive mindset. – Abraham Lincoln (attributed)",
]

const nextQuoteBtn = document.querySelector("button")
const quote = document.querySelector("p")
quote.textContent = quotes_array[0]

console.log(nextQuoteBtn)

nextQuoteBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 20) + 1

  quote.textContent = quotes_array[randomNumber]
})
