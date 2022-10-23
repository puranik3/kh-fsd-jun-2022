import { rest } from 'msw';
import contacts from './data/contacts';

const handlers = [
    rest.get( 'http://localhost:4000/contacts', ( req, res, ctx ) => {
        return res(
            ctx.status( 200 ),
            ctx.json( contacts )
        )
    }),
    rest.post( 'http://localhost:4000/contacts', async ( req, res, ctx ) => {
        const data = await req.json();

        return res(
            ctx.status( 201 ),
            ctx.json({
                id: 3,
                ...data
            })
        )
    }),
    rest.put( 'http://localhost:4000/contacts/:id', async ( req, res, ctx ) => {
        const data = await req.json();

        return res(
            // ctx.status( 200 ), // 200 is the default status code sent out
            ctx.json( data )
        )
    }),
    rest.delete( 'http://localhost:4000/contacts/:id', async ( req, res, ctx ) => {
        return res(
            ctx.status( 204 ),
            ctx.json()
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