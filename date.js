//Connor Ring
//date.js modification
//CMP237
function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[1]) - 1,
                  Number(match[2]));
}
print(findDate("1-30-2003"));
