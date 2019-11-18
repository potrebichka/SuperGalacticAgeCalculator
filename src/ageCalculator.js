import { lifeExpectancy } from '../src/lifeExpectancy';

//global variables
const earthOrbitPeriod = 365.26;
const mercuryOrbitPeriod = 87.97;
const venusOrbitPeriod = 224.7;
const marsOrbitPeriod = 1.8808476*365.26;
const jupiterOrbitPeriod = 11.862615*365.26;
const saturnOrbitPeriod = 10759.6;
const uranusOrbitPeriod = 30685.5 ;
const neptuneOrbitPeriod = 60190;
const plutoOrbitPeriod = 90800;

export class AgeCalculator {
    constructor(date, sex, country) {
        this.birthday = date;
        this.numberOfDays = (new Date() >= date) ? (new Date().getTime() - date.getTime())/(1000*3600*24) : null;
        this.sex = sex;
        this.country = country;
    }

    getAge(orbitPeriod) {
        if (this.numberOfDays || this.numberOfDays === 0) {
            return parseInt(this.numberOfDays / orbitPeriod);
        }
        return "You haven't born yet";
    }

    getEarthAge() {
        return this.getAge(earthOrbitPeriod);
    }

    getMercuryAge() {
        return this.getAge(mercuryOrbitPeriod);
    }

    getVenusAge() {
        return this.getAge(venusOrbitPeriod);
    }

    getMarsAge() {
        return this.getAge(marsOrbitPeriod);
    }

    getJupiterAge() {
        return this.getAge(jupiterOrbitPeriod);
    }

    getSaturnAge() {
        return this.getAge(saturnOrbitPeriod);
    }

    getUranusAge() {
        return this.getAge(uranusOrbitPeriod);
    }

    getNeptuneAge() {
        return this.getAge(neptuneOrbitPeriod);
    }

    getPlutoAge() {
        return this.getAge(plutoOrbitPeriod);
    }

    getStatistic() {
        const statistic = lifeExpectancy(this.sex, this.country);
        if (this.getEarthAge() === "You haven't born yet") {
            return statistic;
        }
        return statistic - (this.numberOfDays / earthOrbitPeriod);
    }

    getLifeExpectEarth() {
        return parseInt(this.getStatistic());
    }

    getLifeExpectMercury() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / mercuryOrbitPeriod);
    }

    getLifeExpectVenus() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / venusOrbitPeriod);
    }

    getLifeExpectMars() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / marsOrbitPeriod);
    }

    getLifeExpectJupiter() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / jupiterOrbitPeriod);
    }

    getLifeExpectSaturn() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / saturnOrbitPeriod);
    }

    getLifeExpectUranus() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / uranusOrbitPeriod);
    }

    getLifeExpectNeptune() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / neptuneOrbitPeriod);
    }

    getLifeExpectPluto() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / plutoOrbitPeriod);
    }

    getNextBirthdayEarth() {
        let day = this.birthday.getDate().toString();
        day.length === 1 ? day = "0" + day : null;
        let month = (this.birthday.getMonth() + 1).toString();
        month.length === 1 ? month = "0" + month : null;
        let year;
        if (this.getEarthAge() === "You haven't born yet") {
            year = this.birthday.getFullYear();
        } else {
            year = this.birthday.getFullYear() + this.getEarthAge()+1; 
        }
        
        return `${month}-${day}-${year}`;
    }

    getStringResult(birthdayDate) {
        let day = birthdayDate.getDate().toString();
        day.length === 1 ? day = "0" + day : null;
        let month = (birthdayDate.getMonth() + 1).toString();
        month.length === 1 ? month = "0" + month : null;
        
        return `${month}-${day}-${birthdayDate.getFullYear()}`;
    }

    getNextBirthdayMercury() {
        let birthdayMercury;
        if (this.getMercuryAge() === "You haven't born yet") {
            birthdayMercury = this.birthday;
        } else {
            birthdayMercury = new Date((parseInt(this.getMercuryAge()) + 1) * mercuryOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayMercury);
    }

    getNextBirthdayVenus() {
        let birthdayVenus;
        if (this.getVenusAge() === "You haven't born yet") {
            birthdayVenus = this.birthday;
        } else {
            birthdayVenus = new Date((parseInt(this.getVenusAge()) + 1) * venusOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayVenus);
    }

    getNextBirthdayMars() {
        let birthdayMars;
        if (this.getMarsAge() === "You haven't born yet") {
            birthdayMars = this.birthday;
        } else {
            birthdayMars = new Date((parseInt(this.getMarsAge()) + 1) * marsOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayMars);
    }

    getNextBirthdayJupiter() {
        let birthdayJupiter;
        if (this.getJupiterAge() === "You haven't born yet") {
            birthdayJupiter = this.birthday;
        } else {
            birthdayJupiter = new Date((parseInt(this.getJupiterAge()) + 1) * jupiterOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayJupiter);
    }

    getNextBirthdaySaturn() {
        let birthdaySaturn;
        if (this.getSaturnAge() === "You haven't born yet") {
            birthdaySaturn = this.birthday;
        } else {
            birthdaySaturn = new Date((parseInt(this.getSaturnAge()) + 1) * saturnOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdaySaturn);
    }

    getNextBirthdayUranus() {
        let birthdayUranus;
        if (this.getUranusAge() === "You haven't born yet") {
            birthdayUranus = this.birthday;
        } else {
            birthdayUranus = new Date((parseInt(this.getUranusAge()) + 1) * uranusOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayUranus);
    }

    getNextBirthdayNeptune() {
        let birthdayNeptune;
        if (this.getNeptuneAge() === "You haven't born yet") {
            birthdayNeptune = this.birthday;
        } else {
            birthdayNeptune = new Date((parseInt(this.getNeptuneAge()) + 1) * neptuneOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayNeptune);
    }

    getNextBirthdayPluto() {
        let birthdayPluto;
        if (this.getPlutoAge() === "You haven't born yet") {
            birthdayPluto = this.birthday;
        } else {
            birthdayPluto = new Date((parseInt(this.getPlutoAge()) + 1) * plutoOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayPluto);
    }
}