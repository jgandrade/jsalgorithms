function spinalCase(str) {
  str=str.replace(/([a-z])([A-Z])/g,"$1 $2")
  str=str.replace(/[\W_]/g,"-").toLowerCase();
  console.log(str);
  return str;
}

spinalCase("AllThe-small Things")