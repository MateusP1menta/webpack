import soma from './calc.js'
import Heading from './components/heading.js'

console.log("testando o webpack");

soma(10, 20);
soma(4 ,2);

//loaders

const heading = new Heading();
heading.create("Este título é dinâmico");