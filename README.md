# Myśloteka — strona podcastu

Publiczna strona studenckiego podcastu Myśloteka (Koło Kognitywistyczne TKK, UMK Toruń):
aktualności redakcji, odcinki i formaty, ekipa, Instagram, kontakt.

## Jak to działa

To jest **statyczny eksport** strony — jeden plik `index.html`, zero serwera, zero budowania.
Filmy z YouTube i ramki Spotify/Instagram ładują się na żywo w przeglądarce gościa.

> Wersja redakcyjna (z logowaniem, edycją aktualności i ekipy) działa na
> perchance.org i nie jest częścią tego repo — to repo zawiera tylko
> opublikowaną, publiczną stronę.

## Podgląd lokalny

Wystarczy otworzyć `index.html` w przeglądarce (dwuklik). Nic nie trzeba instalować.

## Publikacja na GitHub Pages

1. Załóż nowe repo na GitHubie (np. `mysloteka-strona`), puste, bez README.
2. Wgraj pliki z tego folderu (`index.html`, `README.md`, `.nojekyll`) —
   przez stronę GitHuba (Add file → Upload files) albo z terminala:
   ```bash
   git init
   git add index.html README.md .nojekyll
   git commit -m "Myśloteka: publikacja strony"
   git branch -M main
   git remote add origin https://github.com/TWOJ-LOGIN/mysloteka-strona.git
   git push -u origin main
   ```
3. W repo wejdź w **Settings → Pages** i ustaw **Deploy from a branch**,
   branch `main`, folder `/` (root). Zapisz.
4. Po minucie–dwóch strona działa pod adresem
   `https://TWOJ-LOGIN.github.io/mysloteka-strona/`.

## Aktualizacja treści

Treści (aktualności, ekipa) edytuje redakcja na stronie perchance.org.
Po większych zmianach poproś o nowy eksport i **podmień tylko `index.html`**
w repo (commit + push) — reszta plików zostaje bez zmian.

Ostatni eksport: listopad 2026 (aktualności zweryfikowane z kanałem YouTube).

## Kontakt

podcast.mysloteka@gmail.com • https://www.youtube.com/@Mysloteka_TKK •
https://www.instagram.com/mysloteka_podcast/
