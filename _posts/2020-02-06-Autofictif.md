---
layout: post
title: "Des maths avec l'Autofictif"
date: 2020-02-05 15:05:48 +0200
image: 
  thumbnail: /assets/icons/autofictif.jpg
tags: [notebook]
excerpt: Figuring out how long it will take to read Chevillard's blog posts (in French).
---

Eric Chevillard est un "auteur prolifique" qui tient le blog de [l'Autofictif](http://autofictif.blogspot.com/), sur lequel il publie chaque jour un billet contenant trois paragraphes qui prêtent souvent à (sou)rire ou à réfléchir.

On m'a offert il y a quelques années un livre - dédicacé s'il vous plait - rassemblant les 10 premières années de ce blog : l'[Autofictif Ultra Confidentiel](https://www.arbre-vengeur.fr/?p=4647). Un gros pavé donc, mais qui peut être lu et relu, chaque billet étant plus ou moins indépendant des billets précédents. Etonnamment, mon père, qui n'est pas un très grand lecteur, a commencé à feuilleter le livre, et à rire franchement. 

Comme mon père prendra sa retraite à la fin de l'année scolaire, le 4 juillet donc, je me suis posé une question simple : pendant combien de jours mon père pourra lire ce livre (et les nouveaux "tomes" de la série) avant d'être à court de billets à lire ? 

Autrement dit, si quelqu'un commence à lire les billets de Chevillard, à raison de *m* minutes par jour, jusqu'à quand cette personne pourra avoir le plaisir de lire les billets sans devoir relire des billets déjà lus ?

Le modeste outil que voici donne la réponse :

<div class="container" id="dataviz">

{::nomarkdown}
    <link rel="stylesheet" href="/assets/notebooks/autofictif/style.css">
      <div id="menu" class="menu" align="left">
    <div class = "menu-item" id="menu-date">
        <p>Date de début : </p>
        <input type="date" name="startDate" id="date_picker" value="2020-01-30" min="2020-01-30"
            max="2050-01-30"/>
    </div>
    <div class="menu-item" id="menu-minute">
        <p>Minutes par jour : <span id="output_minute"></span></p>
        <input type="range" name="minutes" min="5" max="300" class="slider" id="slider_minute" value="10" step="5">
    </div>
    <div class="menu-item" id="menu-day">
        <p>Jours par semaine : <span id="output_day"></span></p>
        <input type="range" name="day" min="1" max="7" class="slider" id="slider_day">
    </div>
  </div>

  <div id="output" class="output">
    <p><span id="output_result_day"></span> jours de lecture.
    Dernier jour: <span id="output_result_date"></span></p>
    <div id="plot"></div>
  </div>
{:/}
</div>




<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="{{ base.url | prepend: site.url }}/assets/notebooks/autofictif/render.js"></script>

<br/>

Et voici les maths qui se cachent derrière ce graphe interactif fort utile :

### Nombre de billets par jour

Première étape, déterminer combien de billets peuvent être lus en *m* minutes.

Si on prend pour exemple les 100 derniers billets, accessibles sur le blog de l'auteur, on apprend grâce à un petit script Python que la longueur moyenne d'un billet et d'environ 94 mots.

Or, [Wikipedia](https://fr.wikipedia.org/wiki/Mot_par_minute) nous apprend qu'un adulte américain moyen lit entre 250 et 300 mots par minute, et il est mentionné [ici](https://www.actualitte.com/article/monde-edition/vous-lisez-probablement-moins-vite-que-ce-que-vous-croyez/95472) une étude selon laquelle un adulte lirait 260 mots par minute pour des livres de fiction. Comme les billets de Chevillard nécessitent un peu de gymnastique intellectuelle, partons sur une estimation basse: 250 mots par minute.

Un simple tableau en croix nous apprend donc que nous pouvons lire 250/94 = 2.7 billets en 1 minute, soit 2,7 x *m* billets par jour, si notre lecteur lit *m* minutes par jour. (Par exemple, 27 billets par jour, si notre lecteur lit 10 minutes par jour.)

### Nombre de jours de lecture

Si Eric Chevillard arrêtait d'écrire au moment où notre lecteur commençait sa lecture, tout serait assez simple. Sachant que le blog existe depuis le 17 septembre 2017 (date trouvée en ligne mais que je dois encore vérifier !), il suffirait de compter le nombre de jours écoulés entre le 17 septembre 2017 et le jour J  pour trouver le nombre de billets disponibles, puis de diviser ce nombre par le nombre de billets que notre lecteur lit par jour. 

Le problème (mais qui est en fait une bonne chose), c'est qu'Eric Chevillard écrit un billet tous les jours, et qu'il faut prendre cela en compte pour calculer la date fatidique à laquelle notre lecteur n'aura plus aucun billet à se mettre sous la dent.

#### Un petit exemple

Pour commencer, prenons l'exemple d'une personne qui lit 4 billets par jour. Admettons aussi que seuls 8 billets ont été écrits au moment où notre lecteur commence à lire, c'est à dire au jour 0 : 

* Au jour 1, 9 billets ont été écrits (les 8 anciens + 1 nouveau), mais notre lecteur en a lu 4. Il reste donc 9 - 4 = 5 billets à lire.
* Au jour 2, 10 billets ont été écrits (les 8 anciens + 2 nouveaux), mais notre lecteur en a lu 8 (4 au jour 1, et 4 au jour 2). Il reste donc 10 - 8 = 2 billets à lire. 
* Au jour 3, 11 billets ont été écrits (les 8 anciens + 3 nouveaux), mais notre lecteur en a lu 12 (4 au jour 1, 4 au jour 2, 4 au jour 3). Il reste donc 11 - 12 = - 1 billet à lire, c'est à dire plus de billet du tout.

Plus généralement, au jour *j*, 8 + *j* billets ont été écrits, mais notre lecteur en a lu *j* x 4.

La date fatidique arrive quand le *nombre de billets écrits* - *le nombre de billets lus* est inférieur ou égal à 0.

Autrement dit, quand (8 + *j*) - (*j* x 4) <= 0,  
&nbsp;&nbsp;&nbsp;&nbsp; c'est à dire quand 8 + *j* <= *j* * 4  
&nbsp;&nbsp;&nbsp;&nbsp; c'est à dire quand 8 <= (*j* * 4) - *j*  
&nbsp;&nbsp;&nbsp;&nbsp; c'est à dire quand 8 <= *j* * (4 - 1)  
&nbsp;&nbsp;&nbsp;&nbsp; c'est à dire quand 8 / (4 - 1) <= *j*  

Si on appelle *n* le nombre de billets déjà écrits, et *x* le nombre de billets que notre lecteur lit par jour, on obtient la formule suivante : *j*  = *n* / (*x* - 1), où *j* est le nombre de jours de lecture qui restent à notre lecteur.

Dans notre cas, *n* est égal au nombre de jour écoulés entre le premier jour de lecture et le 17 septembre 2007, et *x* est égal à (2.7 * *nombre de minutes par jour*).

Il suffit ensuite de prendre en compte le nombre de jours de lecture par semaine. Mettons que notre lecteur commence à lire le lundi 01 juin 2020. S'il reste à notre lecteur 6 jours de lecture et qu'il lit 7 jours par semaine, la date fatidique sera le samedi 6 juin 2020. En revanche, s'il lit 2 jours par semaine, la date fatidique sera le : 01 juin + 6/2 * 7 jours = 22 juin 2020 (en admettant que son deuxième et dernier jour de lecture soit le dimanche).

#### Une autre manière de voir les choses.

En fait, nous aurions aussi pu voir le problème comme ceci.

* Au jour 1, il y a 9 billets à lire (les 8 anciens + 1 nouveau), et notre lecteur en lit 4. Il reste donc 8 + 1 - 4 = 5 billets à lire. 
* Au jour 2, il y a 6 billets à lire (les 5 restants + 1 nouveau), et notre lecteur en lit 4. Il reste donc 5 + 1 - 4 = 2 billets à lire. 
* Au jour 3, il y a 3 billets à lire (les 2 restants + 1 nouveau), et notre lecteur en lit 4. Il reste donc 2 + 1 - 4 = - 1 billet à lire, c'est à dire plus de billet du tout.

Plus généralement, si on appelle u<sub>(*j*)</sub> le nombre de billets à lire au jour *j*, on peut écrire : "au jour *j*, il y a u<sub>(*j-1*)</sub> + 1 billets à lire, et notre lecteur en lit 4. Il reste donc u<sub>(*j*)</sub> = u<sub>(*j-1*)</sub> + 1 - 4 billets à lire. 

Il s'agit en fait... d'une suite arithmétique, qui peut s'écrire sous la forme u<sub>(*j+1*)</sub> = u<sub>(*j*)</sub> + r. Dans notre cas, *r* = *1 - x*, ou *x* = nombre de billets par jour. 

Or [Wikipedia](https://fr.wikipedia.org/wiki/Suite_arithm%C3%A9tique) nous rappelle que dans une suite arithmétique, u<sub>(*j*)</sub> = *j* x *r* + u<sub>(*0*)</sub>, avec u<sub>(*0*)</sub> le nombre de billets à lire au jour 0.

La date fatidique arrive quand u<sub>(*j*)</sub> <= 0,   
&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; c'est à dire quand *j* x *r* + u<sub>(*0*)</sub> <= 0  
&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; c'est à dire quand *j* <= - u<sub>(*0*)</sub> / *r* où *r* = *1 - x*  
&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; c'est à dire quand *j* <= u<sub>(*0*)</sub> / (*x* - 1).


# Outils  
* "Web-scrapping" du blog avec Python & BeautifulSoup.  
* Visualisation avec Plotly.js.  