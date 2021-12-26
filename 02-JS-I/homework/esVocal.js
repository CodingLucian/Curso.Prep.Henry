function esVocal(letra){
 if (letra.lengt=1) {
      var vocales="aeiou";
  for (const l of vocales) {
  if (l===letra) {
    return true;
  };
  };
  return false;
  };
  };
  console.log(esVocal("y"));
