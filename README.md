# Propriedades CSS

## CSS Basics

### Display

- block: O elemento irá agir como um elemento bloqueado. (assim como um `<p>`)
- inline: O elemento irá agir em linha normalmente. (como um `<span>`)
- inline-block: Terá comportamento **inline**, porém com ***margin*** em cima e em baixo, como elementos **block**.
  > `<span>` por padrão possuem display inline e não possuem margin top e buttom
***
## ID, Class e Selectors

  - id: Utilizado por `#`
  - class: Utiliza o `.`

    > Os ids não podem ser repetidos
***
### Selector

  Quando existe uma situação na qual duas ou mais *tag*s diferentes precisarem utilizar da mesma classe, porém com algumas modificações. O que fazer? Simples, utilizar *selector*. Vejamos o exemplo abaixo:

        <body>
            <div>
                <p>Text one.</p>
                <p class="error">This is a error</p>
            </div>
            <div class="error">This is a big error</div>
        </body>

Tanto o segundo `<p>` quanto a última ``<div>`` são da classe error, porém precisam ser aplicados de formas diferntes. Para isso, no CSS será feito o seguinte:

        .error {
         color: red;
        }

        div.error {
            font-weight: bold;
            font-size: 30px;
        }

***
## Semantic Tags


No HTML5, foram introduzidos algumas tags que trazem um novo significado para os textos html. Os que mais usaremos serão os:

- `<main>` <br>
    Conteúdo principal de uma página.


- `<section>` <br>
    Uma certa sessão da página.

- `<article>` <br>
    Define um pequeno conteúdo.

- `<aside>` <br>
    Define um conteúdo relacionado a outra coisa.

- `<header>` <br>
    O cabeçalho de um site, contendo o nav, title e etc...

- `<footer>` <br>
    Rodapé de um site. <br>


***
## Posição e Layout

- Static: Mamtém o elemento na posição padrão.
- Relative: posição relativa modificada em relação a posição padrão.
- Fixed: Mantém um elemento fixado na página, mesmo com a rolagem da mesma.
- Absolute: Simila a ***rellative***, porém dentro de um componente. Como "*posição absoluta em relação ao componente X*"
- Sticky: Mistura de **static** e **fixed**.

***

# Lista de Tarefas

O projeto abaixo conta com:

- Utilização do Local Storage;
- Funções de click pelo Javascript;
- Estilização pelo CSS;

![Imagem](https://github.com/lucasquitan/html-css-js-notation/blob/master/assets/Lista%20de%20Tarefas.png?raw=true)