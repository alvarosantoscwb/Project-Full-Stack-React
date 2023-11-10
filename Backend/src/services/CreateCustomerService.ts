import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class createCustomService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const costumer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });
    return costumer;
  }
}

export { createCustomService };
