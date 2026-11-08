# BREX TOP UP v2 — Supabase starter

Sa a se yon baz pwojè pou ajoute kont kliyan, wallet, kòmand, wòl admin/revandè ak demann depo.

## 1) Kreye pwojè Supabase
- Kreye yon pwojè sou https://supabase.com
- Nan **Project Settings → API**, kopye Project URL ak anon/public key.
- Nan `config.js`, mete yo. `anon key` la fèt pou parèt nan frontend; **pa janm mete service_role key la nan frontend/GitHub**.

## 2) Kreye baz done a
- Louvri Supabase → SQL Editor.
- Kouri tout sa ki nan `supabase/schema.sql`.

## 3) Aktive Google Login
- Supabase → Authentication → Providers → Google.
- Konfigire OAuth Client ID/Secret Google ou.
- Ajoute URL sit GitHub Pages ou nan **URL Configuration → Redirect URLs**.
- Ranplase `YOUR_GITHUB_PAGES_URL` nan `config.js` ak URL reyèl la.
- Swiv dokiman Supabase pou mete OAuth redirect URI Google la kòrèkteman.

## 4) Pibliye sou GitHub Pages
Mete `index.html`, `style.css`, `app.js`, `config.js` ak folder `supabase` nan repository la. Aktive GitHub Pages sou branch `main`, folder `/ (root)`.

## Sa ki fonksyone lè ou fin konfigire Supabase
- Enskripsyon / koneksyon imel-modpas.
- Google login (apre konfigirasyon OAuth).
- Kreyasyon pwofil kliyan.
- Montre balans wallet.
- Kreye demann depo ki rete `pending` jiskaske admin verifye li.
- Kreye kòmand top-up ki rete `pending` jiskaske founisè a konekte.

## Sa ki PA aktive otomatikman
- MonCash/NatCash peman otomatik: bezwen kontra/API ofisyèl ak verifikasyon callback.
- Wallet depo: kliyan an pa ka ogmante balans li poukont li; admin dwe verifye peman an epi kredite kont lan.
- Livrezon Diamonds: bezwen founisè API otorize, URL/API key, rejyon ak pwodwi li sipòte. Pa mete API secret nan frontend.
- Pòtal revandè: wòl `reseller` la egziste nan baz done; admin dwe bay wòl la.
- Sit la pa dwe vann oswa pwomèt livrezon jiskaske peman ak founisè yo teste.

## Sekirite
- RLS aktive sou tab prive yo.
- Pa janm mete Supabase `service_role`, kle founisè, oswa kle peman nan GitHub.
- Fichye Edge Function yo se modèl pou deplwaman; yo pa rele okenn founisè jiskaske ou ajoute entegrasyon ofisyèl la.
