class PlayList {
  constructor() {
    this.songs = [];
    this.currentIndex = 0;
  }

  add(song) {
    this.songs.push(song);
  }
  
  play() {
    const currentSong = this.songs[this.currentIndex];
    currentSong.play();
  }
  
  stop() {
    const currentSong = this.songs[this.currentIndex];
    currentSong.stop();
  }
  
  next() {
    this.stop();
    this.currentIndex++;
    if(this.currentIndex === this.songs.length) this.currentIndex = 0;
    const currentSong = this.songs[this.currentIndex];
    currentSong.play();
  }
  
  render(list) {
    list.innerHTML = '';
    let songsList = ''; 
    this.songs.forEach(song => songsList += song.toHtml());
    list.innerHTML = songsList;
  }
}


export default PlayList;