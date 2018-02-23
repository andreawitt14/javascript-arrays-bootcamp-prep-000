var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// chocolateBars.push("three musketeers") pushes three musketeers as the new last element of the Array
// chocolateBars.unshift("reeses") puts "reeses" as the new first element of the Array
// spread operator ... ["hersheys",...chocolateBars] puts hersheys as first element and the rest of chocolateBars elements are attached  after

function addElementToBeginningOfArray(array, element){
  
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  return array.unshift(element)
  
}

function addElementToEndOfArray(array, element){
  
  var newarray = [...array, element]
  return newarray
  
}

function destructivelyAddElementToEndOfArray(array, element){
  
  return array.push(element)
  
}