type PropsStrValue = {
  strvalue: string;
  rtn: any;
  forca: number;
};
export function valorForca({ strvalue, forca, rtn }: PropsStrValue) {
  // const [valueForca, setvalueForca] = useState(0);
  var forca = 0;
  if (strvalue.length <= 3) {
    forca = 0; /** força fraca  */
  }
  if (strvalue.length >= 4 && strvalue.length <= 7) {
    forca = forca + 10;
  }
  if (strvalue.length >= 7) {
    forca = forca + 25;
  }
  if (strvalue.length >= 5 && strvalue.match(/[a-z] + /)) {
    forca = forca + 10;
  }
  if (strvalue.length >= 6 && strvalue.match(/[A-Z] + /)) {
    forca = forca + 20;
  }
  if (
    strvalue.length >= 7 &&
    strvalue.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)
  ) {
    forca = forca + 20;
  }

  if (forca < 30) {
    rtn = 'FRACA...';
  }
  if (forca > 30 && forca < 50) {
    rtn = 'MÉDIA...';
  }
  if (forca >= 50 && forca < 70) {
    rtn = 'FORTE...';
  }
  if (forca >= 70 && forca < 100) {
    rtn = 'EXCELENTE...';
  }
  //, console.log('rtn : ' + rtn);
  return String(rtn);
}
