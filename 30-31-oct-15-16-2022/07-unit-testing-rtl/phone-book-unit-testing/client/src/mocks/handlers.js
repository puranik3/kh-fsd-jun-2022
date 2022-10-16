import { rest } from 'msw';
import contacts from './data/contacts';

const handlers = [
    rest.get( 'http://localhost:4000/contacts', ( req, res, ctx ) => {
        return res(
            ctx.status( 200 ),
            ctx.json( contacts )
        )
    })
];

const errorHandlers = [
    rest.get( 'http://localhost:4000/contacts', ( req, res, ctx ) => {
        return res(
            ctx.status( 500 ),
            ctx.json()
        )
    })
];

export {
    handlers,
    errorHandlers
};