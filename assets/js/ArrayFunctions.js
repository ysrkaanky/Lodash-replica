function chunk(array, size = 1) {
   if( typeof array !== "Array") throw new Error("First Argument Must Be An Array");
   if (!array.length) throw new Error("Array Cannot Be Empty");
   if (size < 1) throw new Error("Size can not be smaller than 1");

   let chunk = [];
   let returnArr = [];
   let i = 0;
   while (i < array.length) {
      const element = array[i];
      chunk.push(element);
      if ((i % size) + 1 === size) {
         returnArr.push(chunk);
         chunk = [];
      }
      if (i === array.length - 1) if (chunk.length !== 0) returnArr.push(chunk);
      i++;
   }
   return returnArr
}

function compact(array) {
   if(!Array.isArray(array)) throw new Error("Argument Must Be An Array");
   let i = 0;
   let returnArr = [];
   
   while (i < array.length){
      if(array[i] || array[i] === 0) returnArr.push(array[i]);
      i++;
   }
   return returnArr
}

function concat(array,...values) {
   if(!Array.isArray(array)) throw new Error("First Argument Must Be An Array");
   let i = 0;
   let returnArr = [...array];
   while (i<values.length){
      returnArr = [...returnArr,values[i]];
      i++;
   }
   return returnArr;
}

export default {
   chunk,compact,concat
}