import '@testing-library/jest-dom';
import server from './mocks/server';

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() ); // so that any other handlers set up temporarily are discarded
afterAll( () => server.close() );
// import { configure } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// configure({
//     adapter: new Adapter()
// });