export class AppConstant
{
    static serverUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';
}