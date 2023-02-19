const movements= [200,450,-400,3000,-650,-130,70,1300]; 

// for (const [I,movement] of movements.entries())
// {

//  // accessing indexz in advance for loop
// if ( movement>0)
   
//       { 
//                console.log(`AT ${I} TRANSACTION NUMBER   YOU  DEPOSITED  ${movement}`);
//       }
//        else{
 
//                   console.log(`AT ${I} TRANSACTION NUMBER   YOU  WITHDREW  ${movement}`)
//           }
// }



movements.forEach(function(parmater,index,array)
{

      if ( parmater>0)
   
      { 
               console.log(`AT ${index} TRANSACTION NUMBER   YOU  DEPOSITED  ${parmater}`);
      }
       else{
 
                  console.log(`AT ${index} TRANSACTION NUMBER   YOU  WITHDREW  ${parmater}`)
          }



}
);



// not you can cannot break out of a forEach loop