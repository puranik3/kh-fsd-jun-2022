import { sum, divide } from './arithmetic';

test( 'sum should return 3 when 1 and 2 are passed', () => {
    // arrange
    let x = 1, y = 2;

    // act
    const result = sum( x, y );

    // assert (Behavior driven development)
    expect( result ).toBe( 3 );
} );


describe( 'divide function', () => {
    test( 'divide should return 2 when 6 and 3 are passed', () => {
        // arrange
        let x = 6, y = 3;
    
        // act
        const result = divide( x, y );
    
        // assert
        expect( result ).toBe( 2 );
    });
    
    test( 'divide should throw an error when 6 and 0 are passed', () => {
        // arrange
        let x = 6, y = 0;
    
        // assert
        expect(
            () => {
                divide( x, y )
            }
        ).toThrow();
    });
});