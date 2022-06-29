console.log("Gandalf'd")

const a = document.getElementsByTagName("a")

gandalf = "https://www.youtube.com/watch?v=G1IbRujko-A"
a[0].href

for(let i = 0; i < a.length; i++){
    a[i].href=gandalf
}