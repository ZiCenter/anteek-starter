import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

(async function seed() {
    await prisma.pet.create({
        data: {
            category: {
                create: {
                    name: faker.animal.cat()
                }
            },
            name: faker.name.firstName(),
            photoUrl: faker.image.animals(),
            tags: {
                create: [
                    {
                        name: faker.word.noun()
                    }
                ]
            },
            status: 'available'
        }
    });
})();
