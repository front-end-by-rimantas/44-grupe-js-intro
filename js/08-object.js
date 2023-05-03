console.clear();
/*
OBJECT - objektas
{
    key1: value1,
    key2: value2,
    key3: value3,
}
array - supaprastintas objektas
string - supaprastintas array
*/

// [vardas, amzius, vedybinisStatusas]
const petras = ['Petras', 99, true];
const maryte = ['Maryte', false, 88];

// Sveiki, mano vardas VARDAS ir man KAZKIEK metu.
const s1 = `Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metu.`;
console.log(s1);

const s2 = `Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metu.`;
console.log(s2);

const jonas = {
    name: 'Jonas',
    age: 77,
    isMarried: false,
};

const ona = {
    isMarried: true,
    age: 66,
    name: 'Ona',
};

console.log(ona);
console.log(ona['age']);
console.log(ona['name']);
console.log(ona['isMarried']);
console.log(jonas);
console.log(jonas['age']);
console.log(jonas['name']);
console.log(jonas['isMarried']);

console.log('---------------------');

const random = {
    tekstas: 'Tekstas',
    skaicius: 777,
    arTiesa: true,
    kitas_variantas: 'mhm...',
    'su tarpu': 'ups...',
};

console.log(random['tekstas']);
console.log(random['skaicius']);
console.log(random['arTiesa']);
console.log(random['kitas_variantas']);
console.log(random['su tarpu']);

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

const pazymiai = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);

console.clear();

const student = {
    name: 'Chuck Norris',
    age: Infinity,
    movies: [
        {
            title: 'Walker: Texas ranger',
            year: 1990,
            actors: [
                'Chuck Norris 1',
                'Chuck Norris 2',
            ],
        },
        {
            title: 'Before me',
            year: -3000,
            actors: [
                'Chuck Norris 3',
                'Chuck Norris 4',
            ],
        },
        {
            title: 'Hell bound',
            year: 2000,
            actors: [
                'Chuck Norris 5',
                'Chuck Norris 6',
            ],
        },
    ]
};

console.log(student['name']);
console.log(student.name);

console.log(student['age']);
console.log(student.age);

console.log(student.movies.length);

console.log(student.movies[0]);
console.log(student.movies[0].title);
console.log(student.movies[0].year);
console.log(student.movies[0].actors);
console.log(student.movies[0].actors[0]);
console.log(student.movies[0].actors[1]);
console.log('----------------');
console.log(student.movies[0].title);
console.log(student.movies[1].title);
console.log(student.movies[2].title);
