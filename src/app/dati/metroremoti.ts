import { Metro } from '../model/metro.model';

export const LISTAMETRO: Metro[] =
    [
        { idt: '12345', linea: 'Rossa', numchatting: 23, direzione: '', stazione: '', carrozza: '', tempo: new Date().getTime() + 1000 * 60 },
        { idt: '67890', linea: 'Verde', numchatting: 26, direzione: '', stazione: '', carrozza: '', tempo: new Date().getTime() + 2000 * 60 },
        { idt: '09876', linea: 'Gialla', numchatting: 12, direzione: '', stazione: '', carrozza: '', tempo: new Date().getTime() + 3000 * 60 }
    ];

