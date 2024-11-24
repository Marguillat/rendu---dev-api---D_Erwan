# <a  name="1"></a> Rendu - Dev api - D_Erwan

Bien venu sur cette api d'**enquête policière.** Votre objectif est de trouver
le coupable responsable du crime que vous découvrirez. Ne cherchez pas trop
loin, ceci est une _API_ pas un roman d' **Agatha Christie**. Comme dans la vrai
vie vous **ne saurez pas qui est le coupable**, vous pouvez mettre n'importe qui
en détention. Faites le bon choix ! Bonne chance !

Choisissez votre Inspecteur préféré et commencez l'aventure :

| firstname | lastname |
| --------- | -------- |
| Johnny    | English  |
| Frank     | Columbo  |
| Sherlock  | Holmes   |
| Jake      | Peralta  |
| Johnathan | Gadget   |

⬆️ oui c'est le vrai nom de l'**Inspecteur Gadget**

## <a  name="2"></a> Tables des matières

- [Lancer le projet](#lancer-le-projet)
- [Conception](#conception)
  - [Dictionnaire des données](#dictionnaire-des-données)
  - [Ressources](#ressources)
- [Remarques](#remarques)
- [Références](#références)

## Lancer le projet

Pour télécharger les dépendances : `npm install` ⬇️ Pour créer la clée secrete :
`node utils/genkey.js` ⬇️ Pour lancer l'application : `npm run start` **ou**
Pour lancer l'application en mode dev : `npm run dev`

### Url d'entrée

```
localhost:3000/
```

## Conception

### Dictionnaire des données

Les inspecteurs

| Nom de la donnée | Type | Description                    |
| ---------------- | ---- | ------------------------------ |
| id               | N    | identifiant numérique unique   |
| firstname        | A    | Prénom de l'inspecteur         |
| lastname         | A    | Nom de famille de l'inspecteur |

---

Les suspects

| Nom de la donnée | Type | Description                                          |
| ---------------- | ---- | ---------------------------------------------------- |
| id               | N    | identifiant numérique unique                         |
| firstname        | A    | Prénom du suspect                                    |
| lastname         | A    | Nom de famille du suspect                            |
| role             | A    | Role au sein de la famille / contexte                |
| evidence         | AN   | Informations relatives au suspects, indices, preuves |

---

Les objets

| Nom de la donnée | Type | Description                                          |
| ---------------- | ---- | ---------------------------------------------------- |
| id               | N    | identifiant numérique unique                         |
| object           | A    | nom de l'objet                                       |
| description      | AN   | Description de l'objet et annotation de l'inspecteur |

---

### Ressources

⚠️ l'ensemble des url suppose d'être préfixées par `localhost:3000` ⚠️

| url                           | Méthode HTTP      | Headers                                                         | Body                                         |
| ----------------------------- | ----------------- | --------------------------------------------------------------- | -------------------------------------------- |
| `/`                           | GET               |                                                                 |                                              |
| `/identification`             | POST              | Content-Type: application/json                                  | {"firstname":"Johnny", "lastname":"English"} |
| `/bedroom`                    | GET               | Autorization: Bearer _**jwt**_                                  |                                              |
| `/bedroom/evidences`          | GET               | Autorization: Bearer _**jwt**_                                  |                                              |
| `/bedroom/evidences/{object}` | GET               | Autorization: Bearer _**jwt**_                                  |                                              |
| `/suspects`                   | GET               |                                                                 |                                              |
| `/jail`                       | GET, POST, DELETE | Autorization: Bearer _**jwt**_ , Content-Type: application/json | { "idSuspect": 1 }                           |

## Remarques

Le projet s'est trouvé être hyper sympa et

## Références

1. [Documentation officielle d'Express.js](https://expressjs.com/)
2. [MDN Web Docs - HTTP et API](https://developer.mozilla.org/en-US/docs/Web/HTTP)
3. [Stack Overflow](https://stackoverflow.com/)
4. Cours _**API HTTP RESTful**_ et _**Expressjs**_ par
   [@paul-schuhm](https://github.com/paul-schuhm)
