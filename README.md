<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mcrich921/nasa-apod">
    <img src="public/astronaut.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NASA APOD Website</h3>

  <p align="center" style="width: 400px;">
    A React JS Website using the NASA API to create a stunning one page design showing the Astronomy Picture of the Day and the related information about the picture.
    <br />
    <a href="https://github.com/mcrich921/nasa-apod/tree/main/src/assets/apod_demo.png">View Example</a>
    <!-- ·
    <a href="https://github.com/mcrich921/nasa-apod/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mcrich921/nasa-apod/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
  <li>
      <a href="#inspiration">Inspiration</a>
  </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>

  </ol>
</details>
<br />

### Built Using

[![React][React.js]][React-url]
<br />

<!-- INSPIRATION -->

<a id="inspiration"></a>

## Inspiration

The inspiration for this project comes from an Astronomy class I took in Fall 2023. At the beginning of every class, the professor would project the NASA Astronomy Picture of the Day onto the board. These images, many of which came from the JWST, were always mesmerizing. Once I learned that NASA had an API for this, I knew I had to use it as an excuse to make my first React project.

<!-- GETTING STARTED -->

<a id="getting-started"></a>

## Getting Started

<a id="prerequisites"></a>

### Prerequisites

This project requires Node.js and npm to be installed on your computer. To see if you have them installed

```sh
node -v
npm -v
```

If they are not installed on your computer, follow installation instructions for <a href="https://nodejs.org/en/download/package-manager" target="_blank">Node.js</a>.

<a id="installation"></a>

### Installation

1. Get a free API Key from [NASA](https://api.nasa.gov/)
2. Clone the repo
   ```sh
   git clone https://github.com/mcrich921/nasa-apod.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env` and enter your API
   ```
   VITE_NASA_API_KEY = YOUR_API_KEY
   ```
5. Run npm as a dev and click the localhost link

   ```sh
   npm run dev

   Local:   http://localhost:XXXX/
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<a id="license"></a>

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<a id="contact"></a>

Matthew Rich - mrich@wesleyan.edu

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

<a id="ackowledgements"></a>

- [Guide/Inspiration](https://github.com/jamezmca/nasa-react-app)
- [README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mcrich921/nasa-apod.svg?style=for-the-badge
[contributors-url]: https://github.com/mcrich921/nasa-apod/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mcrich921/nasa-apod.svg?style=for-the-badge
[forks-url]: https://github.com/mcrich921/nasa-apod/network/members
[stars-shield]: https://img.shields.io/github/stars/mcrich921/nasa-apod.svg?style=for-the-badge
[stars-url]: https://github.com/mcrich921/nasa-apod/stargazers
[issues-shield]: https://img.shields.io/github/issues/mcrich921/nasa-apod.svg?style=for-the-badge
[issues-url]: https://github.com/mcrich921/nasa-apod/issues
[license-shield]: https://img.shields.io/github/license/mcrich921/nasa-apod.svg?style=for-the-badge
[license-url]: https://github.com/mcrich921/nasa-apod/tree/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/matthewrichc
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
