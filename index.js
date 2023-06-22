const paragraph = "build1(abc): APM-123 fasdf";
const regex =
  /(build|chore|ci|docs|refactor|revert|style|test|fix|feat)?(\([a-z]+\))?: APM-(\d+) .+/g;
const found = paragraph.match(regex);

console.log(found);
console.log("dung");
