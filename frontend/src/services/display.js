import dayjs from 'dayjs';

export function formatTransactionDate (date) {
    return dayjs(date).format('DD/MM/YYYY HH:mm');
}

export function getTransactionStatusDescription (status) {
    switch (status) {
        case 'processing':
            return 'Em processamento';
        
        case 'accepted':
            return 'Aprovada';
        
        case 'denied':
            return 'Negada';
    }
}