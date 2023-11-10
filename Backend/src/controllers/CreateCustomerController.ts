import { FastifyRequest, FastifyReply } from "fastify";
import { createCustomService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };
    const customService = new createCustomService();
    const customer = await customService.execute({ name, email });

    reply.send(customer);
  }
}

export { CreateCustomerController };
