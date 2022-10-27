type PropsChkPoint = {
  str: [];
};
export function CheckPointPassword({ str }: PropsChkPoint) {
  // const [valueForca, setvalueForca] = useState(0);
  const istr = str;
  const forca = istr.length * 1;

  // if (str.length > 0) {
  //   forca = str.length * 1;
  // }
  // if (str.length === 2) {
  //   forca = forca + 10;
  // }

  // if (str.length >= 4 && str.length <= 7) {
  //   forca = forca + 10;
  // }
  // if (str.length >= 7) {
  //   forca = forca + 25;
  // }
  // if (str.length >= 5 && str.match(/[a-z] + /)) {
  //   forca = forca + 10;
  // }
  // if (str.length >= 6 && str.match(/[A-Z] + /)) {
  //   forca = forca + 20;
  // }
  // if (str.length >= 7 && str.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) {
  //   forca = forca + 20;
  // }
  if (forca < 30) {
    return 'FRACA...';
  }
  if (forca > 30 && forca < 50) {
    return 'MÉDIA...';
  }
  if (forca >= 50 && forca < 70) {
    return 'FORTE...';
  }
  if (forca >= 70 && forca < 100) {
    return 'EXCELENTE...';
  }
}
