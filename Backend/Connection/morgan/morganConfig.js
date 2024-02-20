import morgan from 'morgan';

export default function configureMorgan() {
    return morgan('combined');
}