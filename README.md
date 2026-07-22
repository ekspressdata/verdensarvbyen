# Verdensarvbyen Rjukan – interaktivt kulturminnekart

Et interaktivt kart som formidler arkitektur, bygningstyper og
byplanlegging i verdensarvbyen Rjukan. Kartet viser verneverdig
bebyggelse, historiske områder, byggelinjer og hensynssoner oppå et
egendefinert grunnkart, og lenker videre til utdypende beskrivelser og
offentlige kulturminneregistre.

Kartet ble opprinnelig laget til **Kommunedelplan Rjukan** 
for planavdelingen i Tinn kommune.

**Se nettsiden her: [tinn-kommune.com/verdensarvbyen](https://tinn-kommune.com/verdensarvbyen/)**

---

## Om kartet

- **Kartlag du kan slå av og på** (nede til venstre) – hvert lag gir sin egen
  informasjon når du klikker i kartet:
  - **Verdensarvbyen** – enkeltbygninger oppført før ca. 1930, vist i gult.
  - **Områder** – enhetlige, historiske områder med verneverdi.
  - **Byggelinjer** – tenkte linjer som bebyggelsen er plassert i forhold til.
  - **Høy verneverdi** – objekter med særlig høy verneverdi.
  - **Hensynssoner** – soner fra kommunedelplanen.
  - I tillegg tegnes **Rjukanbanen** sammen med verdensarvbyen-laget.
- **Forklarende verktøytips** – hold pekeren over et område eller en bygning
  for å se navn/beskrivelse.
- **Klikk for mer** – enkeltobjekter åpner en lokal artikkel (HTML/PDF) eller
  lenker rett til [Kulturminnesøk](https://www.kulturminnesok.no/) /
  Askeladden og [Norsk Industriarbeidermuseum](https://nia.no/).
- **Finn deg selv** – sikteknappen (fadenkors) viser din egen posisjon med et
  nøyaktighetsområde, oppdatert live.
- **Navigasjon** – jevn zoom og panorering innenfor Rjukan-området, egen
  velkomst­rute (i-knappen) og en tegn-/kartforklaring (?-knappen).

---

## Teknologi

Kartet er en **statisk nettside** – ren HTML, CSS og JavaScript, uten byggetrinn
eller rammeverk.

| Område           | Valg                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| Type             | Statisk nettside                                           |
| Språk            | HTML, CSS, JavaScript (vanilla)                                            |
| Kartbibliotek    | Leaflet 1.9,4                                                              |
| DOM-hjelp        | jQuery 3.3.1                                                               |
| Grunnkart        | Mapbox (egendefinert stil), med attribusjon til Kartverket og Tinn kommune |
| Geodata          | GeoJSON (`assets/js/geojson.js`)                                           |
| Ikoner           | Font Awesome 5.6.3                                                         |
| Fonter           | Lato + Century Supra / Concourse / Advocate (frie OFL-fonter)              |
| Kvalitetssikring | Prettier                                                                   |<img width="2544" height="1253" alt="verdensarv" src="https://github.com/user-attachments/assets/e178c047-a800-4e2e-9fb2-7d7953020a0e" />


---


---

## Datakilder og regelverk

- **Kommunedelplan Rjukan** (Tinn kommune) – kartet er laget som formidling til
  planen, og områdeavgrensninger følger den.
- **Verdensarven** – Rjukan er del av verdensarvstedet _Rjukan–Notodden
  industriarv_, innskrevet på UNESCOs verdensarvliste i 2015.
- **Kulturminnesøk / Askeladden** (Riksantikvaren) – enkeltobjekter lenker til
  de offentlige kulturminneregistrene.

---
