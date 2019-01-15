describe('data types in javascript', () => {
    describe('strings in JS', () => {
        it('can be single-quoted', () => {
            const name = 'Teddy';
            expect(name).toBe("Teddy");
        });

        it('fun with strings', () => {
            const doubleQuotesInnerSingle = "John O'Connor";
            const singleQuotesInnerDouble = 'She said "Do not do it!" again';
            const escaping = "She said \"Don't do it!\" again";
        });
        
        //Note the usage of back-ticks vs single quotes
        it('has template strings', () => {
            let name = 'Sue', age = 42;

            //Single Quotes
            const m1 = 'Her name is ' +name+ ' and her age is '+age;
            expect(m1).toBe('Her name is Sue and her age is 42');

            //Back Ticks
            const m2 = `Her name is ${name} and her age is ${age}`;
            expect(m2).toBe('Her name is Sue and her age is 42');
        });
    });

    //Primitive Types vs Objects (such as arrays)
    describe('a few actual types and literals', () => {
        //Primitives
        it('some examples', () => {
            const v1 = 'Tacos';
            expect(typeof v1).toBe('string');

            const v2 = 3.1415927;
            expect(typeof v2).toBe("number");

            //note the usage of const vs let
            let v3 = true;
            expect(typeof v3).toBe("boolean");

            v3 = 'Fun!';
            expect(typeof v3).toBe('string');
        });
        //Objects (array is an obj)
        it('const and let and all that', () => {
            const flavors = ['chocolate', 'strawberry', 'vanilla'];
            flavors[0] = 'Mango';
            expect(flavors[0]).toBe('Mango');
            expect(flavors.length).toBe(3);
        });
        it('why var is bad', () => {
            if(true){
                var x = 12
            }
            expect(x).toBe(12);
            //var ignores block scope ( if{} )
        });
    });
});