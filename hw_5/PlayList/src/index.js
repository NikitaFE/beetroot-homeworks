console.log("Hello from Play List");

import Song from "./components/song";
import Movie from "./components/movie";
import PlayList from "./components/playlist";
import CDProduct from "./components/CDProduct";
import BookProduct from "./components/BookProduct";

const playList = new PlayList();
const s1 = new Song('TEST', 'Tom', '03:12')
const s2 = new Song('TEST 1', 'Bill', '05:22')
const m1 = new Movie('Shrek', '2000', '93:54');
const cd = new CDProduct('Bob Marley', 34, 88);
const book = new BookProduct('Harry Potter and JavaScript`s secrets', 32, 549);
//  Тут рандомные проверки
console.log(cd);
console.log(cd.getTitle());
console.log(cd.setTitle('Aguzarova'));
console.log(cd.getTitle());
console.log(cd.getPlayLength());

console.log(book);
console.log(book.getPrice());
console.log(book.setPrice(50));
console.log(book.getPrice());
console.log(book.getNumPages());

playList.add(s1)
playList.add(s2)
playList.add(m1)

const list = document.getElementById('list')
playList.render(list)

const play = document.getElementById('btn-play')
const stop = document.getElementById('btn-stop')
const next = document.getElementById('btn-next')

play.onclick = function(){
  playList.play();
  playList.render(list)
}

stop.onclick = function(){
  playList.stop();
  playList.render(list)
}

next.onclick = function(){
  playList.next();
  playList.render(list)
}