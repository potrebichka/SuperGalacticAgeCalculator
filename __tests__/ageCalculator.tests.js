import { AgeCalculator } from '../src/ageCalculator';

describe ('Age Calculator - age', () => {
    let user1, user2, user3, user4, user5;
    beforeEach(() => {
        user1 = new AgeCalculator(new Date('07-27-1987'), "female", "Russia");
        user2 = new AgeCalculator(new Date('01-29-1951'), "male", "Angola");
        user3 = new AgeCalculator(new Date('10-05-2012'), "male", "United_States");
        user4 = new AgeCalculator(new Date('10-05-2032'), "female", "United States");
        user5 = new AgeCalculator(new Date(), "female", "Canada");
    });
     
    test('should correctly create object Age Calculator', () => {
        expect(user1.birthday).toEqual(new Date('07-27-1987'));
        expect(user1.sex).toEqual("female");
        expect(user1.country).toEqual("Russia");
    });

    test('should correctly create object Age Calculator and calculate number of days', () => {
        // change n for diffrence between today and Nov 15 2019
        let n = 3;
        expect(parseInt(user1.numberOfDays)).toEqual(11799 + n);
        expect(parseInt(user2.numberOfDays)).toEqual(25127 +n );
        expect(parseInt(user3.numberOfDays)).toEqual(2597 + n);
        expect(user4.numberOfDays).toEqual(null);
        expect(parseInt(user5.numberOfDays)).toEqual(0);
    });

    test('should correctly return user age in Earth years', () => {
        expect(user1.getEarthAge()).toEqual(32);
        expect(user2.getEarthAge()).toEqual(68);
        expect(user3.getEarthAge()).toEqual(7);
        expect(user4.getEarthAge()).toEqual("You haven't born yet");
        expect(user5.getEarthAge()).toEqual(0);
    });

    test('should correctly return user age in Mercury years', () => {
        expect(user1.getMercuryAge()).toEqual(134);
        expect(user2.getMercuryAge()).toEqual(285);
        expect(user3.getMercuryAge()).toEqual(29);
        expect(user4.getMercuryAge()).toEqual("You haven't born yet");
        expect(user5.getMercuryAge()).toEqual(0);
    });

    test('should correctly return user age in Venus years', () => {
        expect(user1.getVenusAge()).toEqual(52);
        expect(user2.getVenusAge()).toEqual(111);
        expect(user3.getVenusAge()).toEqual(11);
        expect(user4.getVenusAge()).toEqual("You haven't born yet");
        expect(user5.getVenusAge()).toEqual(0);
    });

    test('should correctly return user age in Mars years', () => {
        expect(user1.getMarsAge()).toEqual(17);
        expect(user2.getMarsAge()).toEqual(36);
        expect(user3.getMarsAge()).toEqual(3);
        expect(user4.getMarsAge()).toEqual("You haven't born yet");
        expect(user5.getMarsAge()).toEqual(0);
    });

    test('should correctly return user age in Jupiter years', () => {
        expect(user1.getJupiterAge()).toEqual(2);
        expect(user2.getJupiterAge()).toEqual(5);
        expect(user3.getJupiterAge()).toEqual(0);
        expect(user4.getJupiterAge()).toEqual("You haven't born yet");
        expect(user5.getJupiterAge()).toEqual(0);
    });

    test('should correctly return user age in Saturn years', () => {
        expect(user1.getSaturnAge()).toEqual(1);
        expect(user2.getSaturnAge()).toEqual(2);
        expect(user3.getSaturnAge()).toEqual(0);
        expect(user4.getSaturnAge()).toEqual("You haven't born yet");
        expect(user5.getSaturnAge()).toEqual(0);
    });

    test('should correctly return user age in Uranus years', () => {
        expect(user1.getUranusAge()).toEqual(0);
        expect(user2.getUranusAge()).toEqual(0);
        expect(user3.getUranusAge()).toEqual(0);
        expect(user4.getUranusAge()).toEqual("You haven't born yet");
        expect(user5.getUranusAge()).toEqual(0);
    });

    test('should correctly return user age in Neptune years', () => {
        expect(user1.getNeptuneAge()).toEqual(0);
        expect(user2.getNeptuneAge()).toEqual(0);
        expect(user3.getNeptuneAge()).toEqual(0);
        expect(user4.getNeptuneAge()).toEqual("You haven't born yet");
        expect(user5.getNeptuneAge()).toEqual(0);
    });

    test('should correctly return user age in Pluto years', () => {
        expect(user1.getPlutoAge()).toEqual(0);
        expect(user2.getPlutoAge()).toEqual(0);
        expect(user3.getPlutoAge()).toEqual(0);
        expect(user4.getPlutoAge()).toEqual("You haven't born yet");
        expect(user5.getPlutoAge()).toEqual(0);
    });
})

describe('Age Calculator - Life Expectancy', ()=> {
    let user1, user2, user3, user4, user5;
    beforeEach(() => {
        user1 = new AgeCalculator(new Date('07-27-1987'), "female", "Russia");
        user2 = new AgeCalculator(new Date('01-29-1951'), "male", "Angola");
        user3 = new AgeCalculator(new Date('10-05-2012'), "male", "United_States");
        user4 = new AgeCalculator(new Date('10-05-2032'), "female", "United_States");
        user5 = new AgeCalculator(new Date(), "female", "Canada");
    });

    test("should correctly return how many years a user has left to live on Earth", ()=> {
        expect(user1.getLifeExpectEarth()).toEqual(43);
        expect(user2.getLifeExpectEarth()).toEqual(-17);
        expect(user3.getLifeExpectEarth()).toEqual(67);
        expect(user4.getLifeExpectEarth()).toEqual(81);
        expect(user5.getLifeExpectEarth()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Mercury", ()=> {
        expect(user1.getLifeExpectMercury()).toEqual(182);
        expect(user2.getLifeExpectMercury()).toEqual(-74);
        expect(user4.getLifeExpectMercury()).toEqual(336);
        expect(user5.getLifeExpectMercury()).toEqual(349);
    });

    test("should correctly return how many years a user has left to live on Venus", ()=> {
        expect(user1.getLifeExpectVenus()).toEqual(71);
        expect(user2.getLifeExpectVenus()).toEqual(-29);
        expect(user4.getLifeExpectVenus()).toEqual(131);
        expect(user5.getLifeExpectVenus()).toEqual(136);
    });

        test("should correctly return how many years a user has left to live on Mars", ()=> {
        expect(user1.getLifeExpectMars()).toEqual(23);
        expect(user2.getLifeExpectMars()).toEqual(-9);
        expect(user4.getLifeExpectMars()).toEqual(43);
        expect(user5.getLifeExpectMars()).toEqual(44);
    });

    test("should correctly return how many years a user has left to live on Jupiter", ()=> {
        expect(user1.getLifeExpectJupiter()).toEqual(3);
        expect(user2.getLifeExpectJupiter()).toEqual(-1);
        expect(user4.getLifeExpectJupiter()).toEqual(6);
        expect(user5.getLifeExpectJupiter()).toEqual(7);
    });

    test("should correctly return how many years a user has left to live on Saturn", ()=> {
        expect(user1.getLifeExpectSaturn()).toEqual(1);
        expect(user2.getLifeExpectSaturn()).toEqual(0);
        expect(user4.getLifeExpectSaturn()).toEqual(2);
        expect(user5.getLifeExpectSaturn()).toEqual(2);
    });

    test("should correctly return how many years a user has left to live on Uranus", ()=> {
        expect(user1.getLifeExpectUranus()).toEqual(0);
        expect(user2.getLifeExpectUranus()).toEqual(0);
        expect(user4.getLifeExpectUranus()).toEqual(0);
        expect(user5.getLifeExpectUranus()).toEqual(1);
    });

    test("should correctly return how many years a user has left to live on Neptune", ()=> {
        expect(user1.getLifeExpectNeptune()).toEqual(0);
        expect(user2.getLifeExpectNeptune()).toEqual(0);
        expect(user4.getLifeExpectNeptune()).toEqual(0);
        expect(user5.getLifeExpectNeptune()).toEqual(0);
    });

    test("should correctly return how many years a user has left to live on Pluto", ()=> {
        expect(user1.getLifeExpectPluto()).toEqual(0);
        expect(user2.getLifeExpectPluto()).toEqual(0);
        expect(user4.getLifeExpectPluto()).toEqual(0);
        expect(user5.getLifeExpectPluto()).toEqual(0);
    });
});

describe('Age Calculator - Life Expectancy', ()=> {
    let user1, user2, user3, user4, user5;
    beforeEach(() => {
        user1 = new AgeCalculator(new Date('07-27-1987'), "female", "Russia");
        user2 = new AgeCalculator(new Date('01-29-1951'), "male", "Angola");
        user3 = new AgeCalculator(new Date('10-05-2012'), "male", "United_States");
        user4 = new AgeCalculator(new Date('10-05-2032'), "female", "United_States");
    });

    test("should correctly return next birthday on Earth", ()=> {
        expect(user1.getNextBirthdayEarth()).toEqual('07-27-2020');
        expect(user2.getNextBirthdayEarth()).toEqual('01-29-2020');
        expect(user3.getNextBirthdayEarth()).toEqual('10-05-2020');
        expect(user4.getNextBirthdayEarth()).toEqual("10-05-2032");
    });

    test("should correctly return next birthday on Mercury", ()=> {
        expect(user1.getNextBirthdayMercury()).toEqual('01-30-2020');
        expect(user2.getNextBirthdayMercury()).toEqual('12-17-2019');
        expect(user3.getNextBirthdayMercury()).toEqual('12-27-2019');
        expect(user4.getNextBirthdayMercury()).toEqual("10-05-2032");
    });

    // test("should correctly return next birthday on Venus", ()=> {
    //     expect(user1.getNextBirthdayVenus()).toEqual('03-04-2020');
    //     expect(user2.getNextBirthdayVenus()).toEqual('12-24-2019');
    //     expect(user3.getNextBirthdayVenus()).toEqual('02-22-2020');
    //     expect(user4.getNextBirthdayVenus()).toEqual("10-05-2032");
    // });

    // test("should correctly return next birthday on Mars", ()=> {
    //     expect(user1.getNextBirthdayMars()).toEqual('06-03-2021');
    //     expect(user2.getNextBirthdayMars()).toEqual('09-01-2020');
    //     expect(user3.getNextBirthdayMars()).toEqual('04-13-2020');
    //     expect(user4.getNextBirthdayMars()).toEqual("10-05-2032");
    // });

    // test("should correctly return next birthday on Jupiter", ()=> {
    //     expect(user1.getNextBirthdayJupiter()).toEqual('02-26-2023');
    //     expect(user2.getNextBirthdayJupiter()).toEqual('4-02-2022');
    //     expect(user3.getNextBirthdayJupiter()).toEqual('08-15-2024');
    //     expect(user4.getNextBirthdayJupiter()).toEqual("10-05-2032");
    // });

    // test("should correctly return next birthday on Saturn", ()=> {
    //     expect(user1.getNextBirthdaySaturn()).toEqual('06-26-2046');
    //     expect(user2.getNextBirthdaySaturn()).toEqual('06-14-2039');
    //     expect(user3.getNextBirthdaySaturn()).toEqual('03-21-2042');
    //     expect(user4.getNextBirthdaySaturn()).toEqual("10-05-2032");
    // });

    // test("should correctly return next birthday on Uranus", ()=> {
    //     expect(user1.getNextBirthdayUranus()).toEqual('07-31-2071');
    //     expect(user2.getNextBirthdayUranus()).toEqual('02-02-2035');
    //     expect(user3.getNextBirthdayUranus()).toEqual('10-09-2096');
    //     expect(user4.getNextBirthdayUranus()).toEqual("10-05-2032");
    // });

    // test("should correctly return next birthday on Neptune", ()=> {
    //     expect(user1.getNextBirthdayNeptune()).toEqual('05-12-2152');
    //     expect(user2.getNextBirthdayNeptune()).toEqual('11-15-2115');
    //     expect(user3.getNextBirthdayNeptune()).toEqual('07-22-2177');
    //     expect(user4.getNextBirthdayNeptune()).toEqual("10-05-2032");
    // });

    // test("should correctly return next birthday on Pluto", ()=> {
    //     expect(user1.getNextBirthdayPluto()).toEqual('03-02-2236');
    //     expect(user2.getNextBirthdayPluto()).toEqual('09-05-2199');
    //     expect(user3.getNextBirthdayPluto()).toEqual('10-05-2020');
    //     expect(user4.getNextBirthdayPluto()).toEqual("05-13-2261");
    // });
});