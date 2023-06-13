let usersWord = "";

let oddList = document.getElementById("odd");
let evenList = document.getElementById("even");

function updateWord(element) {
  usersWord = element.value;

  console.log(usersWord);
}

function handleSubmit() {
  let newListItem = document.createElement("LI");
  newListItem.innerText = usersWord;

  console.log(usersWord.length);

  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem);
  } else {
    oddList.appendChild(newListItem);
  }

  usersWord = "";
  document.getElementById("even-odd-form").reset();
}

/*

need to prevent return key from reloading the page on this item.

      <div>
        <label for="word">word</label>
        <input
          type="text"
          name="word"
          id="word"
          placeholder="what's your word?"
          onkeyup="updateWord(this)"
        />
      </div>


*/

const word = document.getElementById("word");
word.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    handleSubmit();
  }
});
