const getContent = require('./index');

it("returns url of pokemon picture", async () => {
    const pokemon = await getContent("pokemon");
    expect(typeof pokemon).toBe("string");
});

it("returns a Chuck Norris' koke", async () => {
    const joke = await getContent("joke");
    expect(typeof joke).toBe("string");
});

it("returns the temperature of Toronto", async () => {
    const weather = await getContent("weather");
    expect(typeof weather).toBe("number");
});