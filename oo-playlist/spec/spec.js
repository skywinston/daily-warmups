var Playlist = require('../playlist.js');
var Song = require('../song.js');
var song;
var song2;
var playlist;

describe('Song', function(){
  song = new Song('Hey Jude', 420);

  it('Can set a name and duration upon invocation', function(){
    expect(song.name).toEqual('Hey Jude');
    expect(song.duration).toEqual(420);
  });
});



describe('Playlist', function(){
  beforeEach(function(){
    song = new Song('Hey Jude', 420);
    song2 = new Song('Across the Universe', 380);
    playlist = new Playlist();
  });

  describe('list', function(){
    it('Starts out with an empty list of songs', function(){
      expect(playlist.list.length).toEqual(0);
    });
  });

  describe('addSong', function(){
    it('Allows songs to be added to its list', function(){
      playlist.addSong(song);
      expect(playlist.list.length).toEqual(1);
      expect(playlist.list[0].name).toEqual("Hey Jude");
    });
  });

  describe('nowPlaying', function(){
    it('Returns the name of the song that is currently playing', function(){
      playlist.addSong(song);
      expect(playlist.nowPlaying()).toEqual('Hey Jude')
    });
  });

  describe('skipSong', function(){
    it('Reassigns currentSong to the next index position in the song list', function(){
      playlist.addSong(song);
      playlist.addSong(song2);
      playlist.skipSong();
      expect(playlist.nowPlaying()).toEqual('Across the Universe');
    }                                                                            );
  });

  describe('removeSong', function(){
    it('Takes a song name and removes that song from the song list', function(){
      playlist.addSong(song);
      playlist.addSong(song2);
      expect(playlist.list.length).toEqual(2);
      playlist.removeSong(song);
      expect(playlist.list.length).toEqual(1);
    });
  });
});
