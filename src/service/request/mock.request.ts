import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class MockRequest {
    
    @IsNotEmpty({
        message: 'endereco é obrigatório.'
    })
    endereco: string;
    
    @IsNotEmpty({
        message: 'Status Code é obrigatório.'
    })
    httpStatus: number;
    contentType: string;
    charset: string;
    headers: string;
    body: string; 
}