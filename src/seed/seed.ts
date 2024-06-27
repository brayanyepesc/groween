const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const recyclers = [
  { names: 'John Dowen', email: "john@example.com", age: 23, address: 'Calle 25 # 73-29, Medellín, Antioquia, Colombia', contact: '+57 3200213832' },
  { names: 'Jane Doe', email: "jane@example.com", age: 30, address: 'Cra 89 # 37-41, Cristóbal, Medellín, Colombia', contact: '+57 3101234567' },
  { names: 'Sam Smith', email: "sam@example.com", age: 27, address: 'Carrera 15 # 27-90, Bombona II, Medellín, Antioquia', contact: '+57 3157654321' },
  { names: 'Alice Johnson', email: "alicia@example.com", age: 22, address: 'Calle 39 # 115-13, El Salado, Medellín, Antioquia', contact: '+57 3209876543' },
  { names: 'Bob Brown', email: "bob@example.com", age: 35, address: 'Cra 89a # 37-82, Cristóbal, Medellín, Colombia', contact: '+57 3001239876' }
];

const materials = [
  { description: 'Plastic', date: new Date(), quantity: 10 },
  { description: 'Glass', date: new Date(), quantity: 10 },
  { description: 'Plastic', date: new Date(), quantity: 10 },
  { description: 'Glass', date: new Date(), quantity: 10 },
  { description: 'Plastic', date: new Date(), quantity: 10 },
  { description: 'Glass', date: new Date(), quantity: 10 },
  { description: 'Plastic', date: new Date(), quantity: 10 },
  { description: 'Glass', date: new Date(), quantity: 10 },
  { description: 'Plastic', date: new Date(), quantity: 10 },
  { description: 'Glass', date: new Date(), quantity: 10 },
  { description: 'Plastic', date: new Date(), quantity: 10 },
  { description: 'Glass', date: new Date(), quantity: 10 },
];

async function main() {

  await prisma.user.deleteMany({});
  await prisma.material.deleteMany({});
  await prisma.recycler.deleteMany({});
  
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      code: 'xyz123',
    },
  });

  const createdRecyclers = await prisma.recycler.createMany({
    data: recyclers,
  });

  // Recuperar los IDs de los recicladores creados
  const allRecyclers = await prisma.recycler.findMany();
  
  // Asignar los IDs a los materiales correspondientes
  const materialsWithRecyclerId = materials.map((material, index) => {
    return {
      ...material,
      recyclerId: allRecyclers[index % allRecyclers.length].id,
    };
  });

  await prisma.material.createMany({
    data: materialsWithRecyclerId,
  });

  console.log('Database seeded');

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
