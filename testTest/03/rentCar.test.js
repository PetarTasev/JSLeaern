const { expect } = require("chai");

const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

     
describe("Tests …", () => {
    describe('hiring', () => {
        it('validposition', () => {
            expect(() => {companyAdministration.hiringEmployee('name', 'whronPosition', 12)}).to.throw(`We are not looking for workers for this position.`)
        })
        it('succes hiering', () => {
            expect(companyAdministration.hiringEmployee('name', "Programmer", 12)).to.equal(`name was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('name', "Programmer", 3)).to.equal(`name was successfully hired for the position Programmer.`)
        })
        it ('fail hiring', () => {
            expect(companyAdministration.hiringEmployee('name', "Programmer", 2)).to.equal(`name is not approved for this position.`)
            expect(companyAdministration.hiringEmployee('name', "Programmer", 1)).to.equal(`name is not approved for this position.`)
        })
    })
    describe('salary', () => {
        it('invalid input', () => {
            expect(() => {companyAdministration.calculateSalary(-1)}).to.throw("Invalid hours")
            expect(() => {companyAdministration.calculateSalary('-1')}).to.throw("Invalid hours")
            expect(() => {companyAdministration.calculateSalary([-1])}).to.throw("Invalid hours")
        })
        it('less then 160', () => {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500)
            expect(companyAdministration.calculateSalary(5)).to.equal(75)
            expect(companyAdministration.calculateSalary(160)).to.equal(2400)
        })
        it ('more then 160', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415)
            expect(companyAdministration.calculateSalary(200)).to.equal(4000)
        })
    })
    describe('fired', () => {
        it('invalid input', () => {
            expect(() => {companyAdministration.firedEmployee('things, yest, yet', 2)}).to.throw("Invalid input")
            expect(() => {companyAdministration.firedEmployee({tes:'savage', tes: 'quarky'}, 2)}).to.throw("Invalid input")
            expect(() => {companyAdministration.firedEmployee(['Peter', 'Margareth', 'Stan'], -1)}).to.throw("Invalid input")
            expect(() => {companyAdministration.firedEmployee(['Peter', 'Margareth', 'Stan'], 10)}).to.throw("Invalid input")
            expect(() => {companyAdministration.firedEmployee(['Peter', 'Margareth', 'Stan'], [10])}).to.throw("Invalid input")
            expect(() => {companyAdministration.firedEmployee(['Peter', 'Margareth', 'Stan'], '10')}).to.throw("Invalid input")
        })
        it('valid input', () => {
          expect(companyAdministration.firedEmployee(['Peter', 'Margareth', 'Stan'], 2)).to.equal('Peter, Margareth')
          expect(companyAdministration.firedEmployee(['Peter', 'Margareth', 'Stan'], 1)).to.equal('Peter, Stan')
        })
        
    })
} )