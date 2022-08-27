# Cep_Await
## _A zip code searcher by address_

cep await is a tool to fetch cep by address.

## Installation

cep_await requires [Node.js](https://nodejs.org/) v16+ to run.

Install.

```sh
npm -i cep_await
```

## Example Usage
```sh
const api = require('cep_await');
api('feira de santana bahia').then(console.log);


/* "if the address is not fully specified, a list of possible zip codes is returned."

output:
[
  '44002-224', '44002-772',
  '44003-552', '44004-744',
  '44010-850', '44032-487',
  '44044-304', '44050-716',
  '44052-153', '44077-440',
  '44079-004', '44091-392',
  '44091-394', '44092-400',
  '48604-170'
]
*/
```
## License

MIT

## Author
[Allan Pereira](https://www.github.com/allanpereira99/)

**Free Software, Hell Yeah!**