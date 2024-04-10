import {greet} from './greetings.js'
import {colorfullMessage} from './colorfull-mesage.js'
import {read} from './files/readFile.js'


console.log(colorfullMessage(greet('Maks'),read('./files/file-data.txt')));
