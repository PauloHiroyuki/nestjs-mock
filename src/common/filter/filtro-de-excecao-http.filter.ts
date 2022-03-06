import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost, AbstractHttpAdapter } from "@nestjs/core";

@Catch()
export class FitroDeExcecaoHttp implements ExceptionFilter {

    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: HttpException, host: ArgumentsHost) {
        const contexto = host.switchToHttp();
        const requisicao = contexto.getRequest();
        const resposta = contexto.getResponse();

        const { status, body } = exception instanceof HttpException 
            ? {
                status: exception.getStatus(),
                body: {
                    statusCode: exception.getStatus(),
                    timestamp: new Date().toISOString(),
                    message: exception.getResponse(),
                    path: requisicao.path
                }
            }
            : {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    message: exception,
                    path: requisicao.path
                }
            };
        
        this.httpAdapter.reply(resposta, body, status);
    }

}