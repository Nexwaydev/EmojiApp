let myEmoji = ["💻", "📀", "🚴‍♂️"]
const emojiContainer = document.getElementById("emojiContainer")
const emojiInput = document.getElementById("emojiInput")

myEmojiDisplay = JSON.parse(localStorage.getItem("myEmojis"))

if (myEmojiDisplay) {
  myEmoji = myEmojiDisplay
  runEmoji()
}


function runEmoji(){
  let show = ""
  for(let i = 0; i < myEmoji.length; i++){
   show += myEmoji[i]
  }
  emojiContainer.textContent = show
}
runEmoji()


document.getElementById("push-btn").addEventListener("click", function(){
  if(emojiInput.value){
    myEmoji.push(emojiInput.value) 
    emojiInput.value = ""
    localStorage.setItem("myEmojis", JSON.stringify(myEmoji))
    runEmoji()
  }  
})


document.getElementById("pop-btn").addEventListener("click", function(){
  myEmoji.pop()
  localStorage.setItem("myEmojis", JSON.stringify(myEmoji))
  runEmoji()
})


document.getElementById("unshift-btn").addEventListener("click", function(){
  if(emojiInput.value){
    myEmoji.unshift(emojiInput.value)
    emojiInput.value = ""
    localStorage.setItem("myEmojis", JSON.stringify(myEmoji))
    runEmoji()
  }  
})


document.getElementById("shift-btn").addEventListener("click", function(){
 myEmoji.shift()
 localStorage.setItem("myEmojis", JSON.stringify(myEmoji))
  runEmoji()
})