
var sheep = [
    {
        "name": "sheep1"
    },
    {
        "name": "sheep2"
    },
    {
        "name": "sheep3"
    },
    {
        "name": "sheep4"
    },
    {
        "name": "sheep5"
    },
    {
        "name": "sheep6"
    },
    {
        "name": "sheep7"
    },
    {
        "name": "sheep8"
    }
]
var sheep_location = new Array();
for (var i = 0; i < 10; i++) {
    sheep_location[i] = { start: window.innerHeight * i / 10, end: window.innerHeight * (i + 1) / 10, occupied: 0 };
}
