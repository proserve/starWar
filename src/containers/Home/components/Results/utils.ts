export function processFilmsData({ allFilms: { films } }) {
    const startsOccurrences = {};
    if (!films) return films;
    films.forEach(({ characterConnection }) => {
        debugger;
        characterConnection.characters
            .filter(({ species }) => species && species.name === 'Human')
            .forEach(({ name, id }) => {
                if (startsOccurrences[id]) startsOccurrences[id].count += 1;
                else startsOccurrences[id] = { count: 1, name };
            });
    });
    let bestStarts = [{ count: 0 }];
    Object.keys(startsOccurrences).forEach(key => {
        if (startsOccurrences[key].count > bestStarts[0].count) {
            bestStarts = [startsOccurrences[key]];
        } else if (startsOccurrences[key].count === bestStarts[0].count) bestStarts.push(startsOccurrences[key]);
    });
    const goodStarts = Object.values(startsOccurrences).filter(({ count }) => count >= 2 && count <= 4);
    return { bestStarts, goodStarts };
}
