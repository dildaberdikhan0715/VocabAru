# VocabFlow — Russian vocabulary learner

Open `index.html` directly in a browser.

This build includes an **independently curated 538-word IELTS Reading deck** with Russian translations and English synonyms/paraphrases. It is not a verbatim reproduction of a commercial 538-word book. The first 54 cards also contain fuller Russian definitions and bilingual examples.

Learning progress is stored in browser localStorage (`vocabflow_v3`).


Listening Corpus update:
- Preserves original section labels from the source corpus.
- Study or review each section separately.
- Wrong spellings: scheduled again after ~10 minutes.
- Correct spellings: expanding review intervals (~1, 3, 7, 14, 30, 60 days, then longer).
- Repeated mistakes shorten future intervals.
- Error count, accuracy, interval and next-review time are stored in browser local storage.


Global duplicate rule:
- A normalized English headword is assigned to the first book where it appears.
- The same exact headword is hidden from every later book.
- The rule also applies to the Listening Corpus when an exact headword already appeared in an earlier book.
- Phrases are only considered duplicates when the normalized full text matches exactly.


Pronunciation update: browser speech now prefers American English (en-US) across IELTS 538, synonyms/paraphrases, and Listening Corpus.
