var result = [
    {
        subject: 'math',
        score: 88
    },
    {
        subject: 'chinese',
        score: 95
    },
    {
        subject: 'english',
        score: 80
    }
];
var sum = result.reduce(function(prev, cur) {
    return cur.score + prev;
}, 0);
console.log('sum',sum)