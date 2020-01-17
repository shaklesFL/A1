//server file
const express   = require("express");       //the include
const app       = express();                //initialize
const http      = require("http");          //need http (built-in)
const server    = http.createServer(app);   //initlialize

const PORT      = 1111; //DEFUALT UNSECURED IS 80 BUT GOOD PRACTICE TO USE OTHER PORTS

server.listen(PORT);                            //HEY! Listen!
app.use(express.static(__dirname + "/public"));  //setting the html directory

console.log ("Listening on port: " + PORT);

//root "route" i.e. when we go to lcocalhost:1111 index.html will be served
app.get('/', function(feq, res)
{
    res.sendFile(__dirname + "public/index.html");
});

//                      ^     |    /
//              \  ^ | ^   ^  ^  ^  ^   /
//           < ^                  ^  ^ \   /
//       < ^                            ^ \
//      <                                | > 
//    <                                    \
//   < /           |\      /\   v |- \    | >
//   < <       v|v   v\ v v   \/      |    |>
//    <<  /__-----     v   ___------  |  > >
//    < <|    __              __     / |- \
//     < |  /  O\           /  O\    | |/  |
//       \  \___/           \___/      | \ |
//         |        |       \          |- /
//         |       <_                 |
//          |                         |
//           |  /------------/       /
//             \     ---          / | 
//              \              /    |
//                 \  ____  /     | |
//          ___--====|           /   |===--____
//       /         |                 |       ----____
//    /            | ---   _/  ---  /                   \
//   /              \             /                         \
//  |                 \       /                                |
//  |                    --                                      |
//  |                                                             |  
//   |                                                             |
//   |                                                             |
//   |                                                             |
//   |                                                             |
//    |                                                            |
//    |                                                           |
//    |                                                           |
//    |                                                           |
//     |                                                         |
//     |                                                         |
//     |                                                         | 
//     |                                                        |
//      |                                                       |
//      |                                                      |
//      |                                                      |
//       |                                                     |
//       |                                                    |
//       |                                                    |
//        |               |                                    |
//        |               |                                      \
//        |               |                                        \
//       /               |                                           \\
//     /                |                                                \ __________
//    /                \                                                             /  \        
//  |                     \ ___ /                                                         \____________________  
// |                                                                                        \_|________________\
// |                                                                                                           |
// |                                                                                                           |
// \                                                                                                           |
//  \                                   /                                               \\                    /  
//    \\ ____________________________/-----------------\ _______________________________/  \________________//








//
//
//                                      
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//