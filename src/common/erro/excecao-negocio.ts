import { NotFoundException, HttpException, HttpStatus } from "@nestjs/common";

export class ExcecaoDeNegocio extends HttpException {
    constructor(message: string, status?: HttpStatus) {
        if (!status) {
            status = HttpStatus.BAD_REQUEST;
        }
        super(message, status);
    }
}