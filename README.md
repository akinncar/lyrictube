# LyricTube Chrome Extension

This is a Google Chrome extension to apply lyrics from music to youtube pages.

## What's inside

- [Vagalume API](https://api.vagalume.com.br/)
- [jQuery](https://jquery.com/) 3.4.1

## Motivation

To sing a music and learn your lyrics, currently the most popular road is divide your screen in 2 tabs, and manually search your music in any lyric site. The extension automatize this proccess searching the lyric automatic in Vagalume Database.

## Demo

### See how extension works in a youtube music page:

![Demo](https://i.ibb.co/kQm3kVv/Captura-de-Tela-2019-08-17-a-s-23-16-50.png)

## Next Steps

Vagalume API only supports search musics by artist and music name, the extension have this work of gets the principal artist from the song and your name to search on api by DOM inspection in youtube page. In currently branch, this algoritm have many exceptions and is expected that in future, this be resolved.
