const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const recyclers = [
  { names: 'John Dow', email: "john@example.com", age: 23, address: 'Calle 25', contact: '+57 3200213832' },
  { names: 'Jane Doe', email: "jane@example.com", age: 30, address: 'Avenida 10', contact: '+57 3101234567' },
  { names: 'Sam Smith', email: "sam@example.com", age: 27, address: 'Carrera 15', contact: '+57 3157654321' },
  { names: 'Alice Johnson', email: "alicia@example.com", age: 22, address: 'Calle 50', contact: '+57 3209876543' },
  { names: 'Bob Brown', email: "bob@example.com", age: 35, address: 'Avenida 20', contact: '+57 3001239876' }
];

const materials = [
  { description: 'Plastic', date: new Date(), quantity: 10, recyclerId: 1 },
  { description: 'Glass', date: new Date(), quantity: 10, recyclerId: 1 },
  { description: 'Plastic', date: new Date(), quantity: 10, recyclerId: 1 },
  { description: 'Glass', date: new Date(), quantity: 10, recyclerId: 2 },
  { description: 'Plastic', date: new Date(), quantity: 10, recyclerId: 2 },
  { description: 'Glass', date: new Date(), quantity: 10, recyclerId: 2 },
  { description: 'Plastic', date: new Date(), quantity: 10, recyclerId: 3 },
  { description: 'Glass', date: new Date(), quantity: 10, recyclerId: 3 },
  { description: 'Plastic', date: new Date(), quantity: 10, recyclerId: 3 },
  { description: 'Glass', date: new Date(), quantity: 10, recyclerId: 4 },
  { description: 'Plastic', date: new Date(), quantity: 10, recyclerId: 4 },
  { description: 'Glass', date: new Date(), quantity: 10, recyclerId: 5 },
]

async function main() {
  
  await prisma.user.create({
    data: {
      email: 'alice@example.com',
      code: 'xyz123',
    },
  });

  await prisma.recycler.createMany({
    data: recyclers,
  });

  await prisma.material.createMany({
    data: materials,
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
