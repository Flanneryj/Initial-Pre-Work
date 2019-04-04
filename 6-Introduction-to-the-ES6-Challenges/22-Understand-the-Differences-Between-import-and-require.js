/*> Import allows you to choose which sections of a module or file to load into, saving time and memory
The whitespace surrounding the function inside the curly braces is a best practice - it makes it easier to read the import statement
The lessons in this section handle non-browser features. import, and the statements we introduce in the rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser
In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency
*/

import { capitalizeString } from "string_functions"
