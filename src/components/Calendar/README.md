# 日历组件的实现

实现一个日历，关键的一点在于知道这个月中每一个星期有哪些日子。我们用一个数组来存储一个星期（从周日开始，到周六结束）。只要从1号开始，依次检查这一天是星期几，如果是周六，则接下来用一个新的数组表示下一个星期。

每一个月的1号是 `new Date(year, month, 1)`，在 js 中这个月的最后一天可以等价表示为下个月的第0天 `new Date(year, month + 1, 0)`，所以就能知道该月有多少天了。

最后，对于一个月的第一个星期和最后一个星期，要分别在开头和末尾补充空元素，使数组长度为7，才能正确显示日历。

```js
const getWeekDays = (year, month) => {

  const weeks = [];
  const lastDate = new Date(year, month + 1, 0);
  const daysCountInThisMonth = lastDate.getDate() - 1;

  let i = 0;
  let d = new Date(year, month, 1);
  let week = [];
  while (i <= daysCountInThisMonth) {
    week.push(new Date(d));
    if (d.getDay() === 6) {
      weeks.push([...week.splice(0)]);
    }
    d.setDate(d.getDate() + 1);
    i++;

    // 填补最后一周的空白日期
    if (i > daysCountInThisMonth && week.length < 7 && week.length > 0) {
      const blankNum = 7 - week.length;
      for (let j = 0; j < blankNum; j++) {
        week.push(null);
      }
      weeks.push(week);
    }
  }

  if (weeks.length > 0 && weeks[0].length < 7) {
    const blankNum = 7 - weeks[0].length;
    weeks[0].splice(0, 0, ...new Array(blankNum).fill(null));
  }

  return weeks;
}
```