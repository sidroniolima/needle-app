const sumMachines = (machines) =>
{ 
  var nSum = 0;

  Object
    .entries(machines)
    .forEach( ([key, value]) => 
      {
        nSum += value;
      }
    );

  return nSum;
};

export default sumMachines;