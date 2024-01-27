<div align="center">
  <img alt="logo"  src="../pokedex-frontend/public/images/Home/smiley.png">
</div>

<h3 align="center">
    Code challenge based on the famous Pokémon anime! With ReactJs, Redux, SASS, Axios and ViteJS 💻🚀
</h3>

<p align="center">
  <a href="#about-the-project">About The Project</a> |
  <a href="#layout">Layout</a> |
  <a href="#technologies">Technologies</a> |
  <a href="#contribution">Contribution</a> |
  <a href="#author">Author</a> |
  <a href="#license">License</a>
</p>

</br>

---

<h4 align="center">
	🚧 Status: Building 🚀  🚧

  <p align="center">https://fantastic-naiad-78a9d5.netlify.app/</p>

</h4>

---

</br>

<h2 id="about-the-project" > ⏰📈 About The Project </h2>

1. Show all Pokémons.
2. Show Pokémons by ID.
3. Show Pokémons by Category.
4. Show Pokémon's details.
   5.Challenge developed in order to apply front-end knowledges
   using [PokéAPI](https://pokeapi.co/) - **The RESTful Pokémon API**.

## Next steps:

- [ ] Pagination;
- [ ] Dark theme;
- [ ] Favorites Pokémons;

---

## 🚀 Getting Started

First, run the development server:

```bash
# Clone Repository
$ git clone https://github.com/joseandresgavilanes/pokedex-fullstack.git
# Go to server folder
$ cd pokedex-frontend
# Install Dependencies
$ npm i
# Run Aplication with ViteJS
$ npm run dev
```

---

<h2 id="layout" >🎨  Layout </h2>

The Pokédex preview:
**NOTE:** In each image, there will be a short review of how the process was to build the result seen.

### Loader

![screen home](../pokedex-frontend//public/images/BuildingProcess/loader.png)

- It was planned to do something that motivates the user to interact with the site and arouses their interest from the beginning.
- Used SASS and some models to get an idea of ​​what I wanted to create as a final result.
- Added unique touches like sender and recipient on one side of the box.
- Added the possibility that the user could see Pikachu, the most famous pokemon, by clicking on the top of the box.

---

### Home

![screen home](../pokedex-frontend//public/images/BuildingProcess/home.png)

- I wanted to continue visually motivating the user and do something that activates their visual senses.
- An image of a pokeball was used and with animations, it could move across the screen.
- Security was added to the routes so that the user would necessarily give us their name so that they could view the rest of the site. Redux was used to store the name.
- Added a header and footer with their respective pokeballs and characteristic Pokemon colors.

---

### PokedexArt

![screen home](../pokedex-frontend//public/images/BuildingProcess/pokedexArt.png)

- I wanted to close with a flourish and completely surprise the user, making their experience completely memorable.
- A pokedex based on a model presented in the Anime was drawn with SASS. It was about being as faithful as possible.
- Pixelart was used to create a series of pixel animations so that the user has an idea of ​​what the site is about, had a contrast of designs and to be able to give a personal brand with amazing drawns.
- On the pokedex screen, added a typing animation to welcome the user.
- Added a button to close the pokedex, which in this case worked as a modal. Another button was added so that the user could visit the creator's Linkedin.

---

### Pokemons

![screen home](../pokedex-frontend//public/images/BuildingProcess/pokemons.png)

- I wanted to make a user friendly entry and if you are a fan of pokemon, to be able to remember past memories using a card design similar to the traditional game.
- Redux was used to display the name that the user has previously passed to us.
- The card showed the image of the pokemon, its type and all the necessary stats to be able to do a pokemon battle.
- Added two icons, one to represent the Kruger Corp brand and the other to allow the user to access more information about the pokemon.
- Used axios to query the PokeAPI.
- In this case, the main react tool, the components, was used to make the work easier and thanks to the information from the PokeAPI, the card could be programmed only once and all the available pokemons were displayed.
- The color of each pokemon card depends on its typo.

---

### SearchBar

![screen home](../pokedex-frontend//public/images/BuildingProcess/searchByName.png)

- Here the user could enter the name of his favorite pokemon.
- User input was received and it was compared if any pokemon matched within the database.
- If the pokemon existed, the user could see just one specific pokemon card and its information.
- An amazing search bar was made.

---

### Categories

![screen home](../pokedex-frontend//public/images/BuildingProcess/categories.png)

- Here the user could select any of the pokemon types that the PokeAPI gave us, again Axios was used for this.
- The user's selection was received and later he/she could see all the cards of the pokemons that had that type.

---

### Pokemon's info

![screen home](../pokedex-frontend//public/images/BuildingProcess/pokemonInfo.png)
![screen home](../pokedex-frontend//public/images/BuildingProcess/movements.png)

- Here the user can see more information about the pokemon.
- The stats were made in the form of a bar so that they were filled with the info of the pokemon, the maximum in this case was 200.
- The moves that an specific pokemon had were shown.
- The colors depended on the type of the pokemon.

---

<h2 id="technologies"> 🛠 Technologies </h2>

The following tools were used in the construction of the project:

- **[ReactJS](https://reactjs.org)**
- **[Javascript](https://www.javascript.com/)**
- **[Redux](https://redux.js.org/)**
- **[Axios](https://github.com/axios/axios)**
- **[ViteJS](https://vitejs.dev/)**
- **[PokéAPI](https://pokeapi.co/)**

---

<h2 id="contribution"> 💪 Contribution </h2>

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="author"> 💻 Author </h2>

<img style="border-radius: 50% !important;" src="../pokedex-frontend/public/images/Home/pepe.jpg" width="100px;" alt="photo author"/>

<sub><b>José Andrés Gavilanes - Smiley</b></sub></a> <a href="https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/" title="jose`s linkedin">🚀</a>
<br />
[![Linkedin Badge](https://img.shields.io/badge/-Jose-1692B4?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/kelwyoliveira/)](https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/)
[![Gmail Badge](https://img.shields.io/badge/-joseandresgavilanes2012@gmail.com-4682B4?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:joseandresgavilanes2012@gmail.com)](mailto:joseandresgavilanes2012@gmail.com)

---

<h2 id="license"> 📝 License </h2>
This project is under the [MIT](./LICENSE) license.
